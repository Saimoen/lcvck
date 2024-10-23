import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ResultsService } from '../../shared/services/results.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../shared/model/Course.model';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    DatePipe,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  myForm = new FormGroup({
    date: new FormControl(''),
    course: new FormControl(''),
    classements: new FormArray([
      this.createClassementGroup(), // Initialisation avec un premier groupe
    ]),
  });

  // Getter pour simplifier l'accès au FormArray dans le template
  get classements(): FormArray {
    return this.myForm.get('classements') as FormArray;
  }
  results: Course[] = [];
  filteredResults: Course[] = [];
  selectedOption: number | null = null;
  visible: boolean = true;
  authService = inject(AuthService);
  token = this.authService.getAuthToken();
  titre: boolean = false;
  courseId: number = 0;
  modif: boolean = true
  selectedCourseId: number | null = null;

  constructor(private resultsService: ResultsService,  private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
        // Récupérer l'ID de la course à partir de la route
        const courseId = +this.route.snapshot.paramMap.get('id')!;
        if (courseId) {
          this.courseId = courseId;
          this.getCourseById(courseId); // Charger la course à modifier
        }
    this.getResults();
  }

  // Méthode pour créer un FormGroup pour un classement
  createClassementGroup(): FormGroup {
    return new FormGroup({
      position: new FormControl('', Validators.required),
      num: new FormControl('', Validators.required),
      dossard: new FormControl('', Validators.required),
      equipage: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      temps: new FormControl('', Validators.required),
      ecart: new FormControl('', Validators.required),
    });
  }
  

  // Méthode pour ajouter un nouveau classement au FormArray
  addClassement() {
    this.classements.push(this.createClassementGroup());
    this.titre = true;
  }

  // Méthode pour supprimer un classement du FormArray
  removeClassement(index: number) {
      this.classements.removeAt(index);
  }

  selectChange(event: any) {
    const selectedValue = event.target.value;
    this.selectedOption = selectedValue ? +selectedValue : null;
    this.filterResults();
  }

  filterResults() {
    if (this.selectedOption === null) {
      this.filteredResults = this.results;
    } else {
      this.filteredResults = this.results.filter(
        (result: any) => this.extractYear(result.date) === this.selectedOption
      );
    }
  console.log(this.filteredResults);

    this.visible = this.filteredResults.length > 0;
  }

  extractYear(dateString: string) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  getResults() {
    this.resultsService.getResults().subscribe(data => {
      this.results = data;
      console.log(this.results);
      this.filterResults();
    });
  }

  getCourseById(id: number) {
    // Si l'ID est déjà sélectionné, désélectionnez-le
    if (this.selectedCourseId === id) {
      this.selectedCourseId = null;
    } else {
      this.selectedCourseId = id;
      // Ici, vous pouvez également ajouter la logique pour récupérer les données de la course si nécessaire
      this.resultsService.getCourseById(id).subscribe((data) => {
        console.log(data);
        if(data.id === id) {
          this.modif = true;
        }
        // Pré-remplir le formulaire avec les données de la course
        this.myForm.patchValue({
          date: data.date,
          course: data.course,
          classements: data.classements || [],  // Assure-toi de traiter les classements
        });
    
        // Si les classements sont un tableau, il faut les ajouter au FormArray
        this.myForm.setControl('classements', this.fb.array(
          data.classements.map(classement => this.fb.group(classement))
        ));
      });
      this.titre = true;
    }
  }

  putResults(id: number) {
    const formValue = this.myForm.value;
    const courseData: Course = {
      id: id,
      date: formValue.date || '',
      course: formValue.course || '',
      classements: formValue.classements || [],
    };

    // Appel au service pour envoyer les données à l'API
    this.resultsService.putResults(courseData, courseData.id).subscribe(
      (response) => {
        console.log('Réponse du serveur : ', response);
        console.log('ID : ', id);

        this.getResults();
        window.location.reload();
        alert('Données modifiées avec succès');
      },
      (error) => {
        console.log('ID : ', id);
        console.error("Erreur lors de l'envoi : ", error);
        alert("Erreur lors de la modification des données");
      }
    );
  }

  sendInformation() {
    const formValue = this.myForm.value;
    const courseData: Course = {
      id: this.courseId,
      date: formValue.date || '',
      course: formValue.course || '',
      classements: formValue.classements || [],
    };
  
    this.resultsService.postResults(courseData).subscribe(
      (response) => {
        console.log('Réponse du serveur : ', response);
        this.getResults();
        this.myForm.reset(); // Reset form after submission
        alert('Données envoyées avec succès');
      },
      (error) => {
        console.error("Erreur lors de l'envoi : ", error);
        alert("Erreur lors de l'envoi des données: " + (error.error?.message || 'Veuillez réessayer plus tard.'));
      }
    );
  }

  deleteCourse(id: number) {
    this.resultsService.deleteCourse(id).subscribe(
      (response) => {
        console.log('Réponse du serveur : ', response);
        this.getResults();
        alert('Course supprimée avec succès');
      },
      (error) => {
        this.getResults();
      }
    );
  }
  
}
