import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../model/Club.model';
import { environmentProd } from '../../../environments/environment.prod';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }
  apiUrl: string = environmentProd.apiUrl + 'api/v1/clubs';

  getClub(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  getClubById(id: number): Observable<Club> {
    return this.http.get<Club>(this.apiUrl + `/get/${id}`);
  }

  uploadClub(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl + '/upload', formData);
  }
  
  getImage(id: number): Observable<Blob> {
    return this.http.get(this.apiUrl + `/image/${id}`, { responseType: 'blob' });
  }

  updateClub(club: Club, file: File): Observable<any> {
    const formData: FormData = new FormData();
    if (file) {
        formData.append('image', file, file.name); // Ajoutez le fichier d'image si disponible
    }
    formData.append('mail', club.mail);
    formData.append('telephone', club.telephone);
    formData.append('titre', club.titre);
    formData.append('adresse', club.adresse);
    formData.append('latitude', club.latitude.toString());
    formData.append('longitude', club.longitude.toString());
    formData.append('lien', club.lien);
    formData.append('province', club.province);
    formData.append('type', club.type);

    // Appelez le endpoint PUT
    return this.http.put(this.apiUrl + `/update/${club.id}`, formData);
}

  deleteClub(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + `/delete/${id}`);
  }
}
