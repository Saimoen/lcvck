import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ClubService } from '../../shared/services/club.service';
import L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Club } from '../../shared/model/Club.model';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterModule, LeafletModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ClubsComponent {
  myForm = new FormGroup({
    image: new FormControl(''),
    mail: new FormControl(''),
    telephone: new FormControl(''),
    titre: new FormControl(''),
    adresse: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    lien: new FormControl(''),
    province: new FormControl(''),
    type: new FormControl(''),
  });

  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        attribution: '...',
      }),
    ],
    zoom: 10,
    center: L.latLng(-22.280849, 166.433937),
  };

  public datas: Club[] = [];
  public data?: Club;
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;
  public selectedOption: string = 'Toutes';
  public authToken?: string | null;
  public selectedFile: File | null = null; // Propriété pour stocker le fichier sélectionné
  public imageUrls: { [id: string]: string } = {};

  constructor(
    private clubService: ClubService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.authToken = this.authService.getAuthToken();
    this.clubService.getClub().subscribe((data: Club[]) => {
      this.datas = data;
      this.layers = [];
      this.datas.forEach((element: any) => {
        this.data = element;
        this.clubService.getImage(element.id).subscribe((blob: Blob) => {
          // Création d'une URL à partir du blob pour l'affichage
          this.imageUrls[element.id] = URL.createObjectURL(blob);

          const marker = L.marker([element.latitude, element.longitude], {
            icon: L.divIcon({
              className: 'custom-icon',
              html: `
                <img src="${this.imageUrls[element.id]}" alt="marker-icon" style="width: 50px" />
                `,
            }),
          }).on('click', (event) => {
            console.log('Yay, my marker was clicked!', event);
          });
  
          this.layers.push(marker);
        });

      });
    });
  }

  addClub() {
    const formData: FormData = new FormData();

    // Ajout des valeurs du formulaire au FormData avec une valeur par défaut pour éviter les erreurs
    formData.append('mail', this.myForm.value.mail ?? '');
    formData.append('telephone', this.myForm.value.telephone ?? '');
    formData.append('titre', this.myForm.value.titre ?? '');
    formData.append('adresse', this.myForm.value.adresse ?? '');
    formData.append('latitude', this.myForm.value.latitude?.toString() ?? '');
    formData.append('longitude', this.myForm.value.longitude?.toString() ?? '');
    formData.append('lien', this.myForm.value.lien ?? '');
    formData.append('province', this.myForm.value.province ?? '');
    formData.append('type', this.myForm.value.type ?? '');

    // Ajout du fichier image au FormData si présent
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    console.log(this.selectedFile);

    // Envoi du FormData avec le service
    this.clubService.uploadClub(formData).subscribe((data) => {
      console.log(data);
    });

    this.getClub();
  }

  deleteClub(id: string) {
    this.clubService.deleteClub(id).subscribe((data) => {
      console.log(data);
    });
    this.getClub();
  }

  getClub(){
    this.clubService.getClub().subscribe((data: Club[]) => {
      this.datas = data;
    });
    window.location.reload();
  }

  // Méthode appelée lors de la sélection d'un fichier
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  selectChange(event: any) {
    this.selectedOption = event.target.value;
  }

  filterClub(type: string) {
    if (this.selectedOption === 'Toutes') {
      return true;
    } else if (type === this.selectedOption) {
      return true;
    }
    return false;
  }
}
