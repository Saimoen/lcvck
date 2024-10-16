import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ResultsService } from '../../shared/services/results.service';
import { RouterLink } from '@angular/router';
import { Course } from '../../shared/model/Course.model';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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

  constructor(private resultsService: ResultsService) {
  }

  ngOnInit(): void {
    this.getResults();
  }

  // Méthode pour créer un FormGroup pour un classement
  createClassementGroup(): FormGroup {
    return new FormGroup({
      position: new FormControl(''),
      numero: new FormControl(''),
      dossard: new FormControl(''),
      equipage: new FormControl(''),
      categorie: new FormControl(''),
      nom: new FormControl(''),
      temps: new FormControl(''),
      ecart: new FormControl(''),
    });
  }

  // Méthode pour ajouter un nouveau classement au FormArray
  addClassement() {
    this.classements.push(this.createClassementGroup());
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

  console() {
    const formValue = this.myForm.value;
    const courseData: Course = {
      date: formValue.date || '',
      course: formValue.course || '',
      classements: formValue.classements || [],
    };

    // Appel au service pour envoyer les données à l'API
    this.resultsService.postResults(courseData).subscribe(
      (response) => {
        console.log('Réponse du serveur : ', response);
        this.getResults();
        window.location.reload();
        alert('Données envoyées avec succès');
      },
      (error) => {
        console.error("Erreur lors de l'envoi : ", error);
        alert("Erreur lors de l'envoi des données");
      }
    );
  }
}
