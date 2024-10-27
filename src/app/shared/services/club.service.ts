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
  apiUrl: string = environment.apiUrl + 'api/v1/clubs';

  getClub(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  uploadClub(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl + '/upload', formData);
  }
  
  getImage(id: number): Observable<Blob> {
    return this.http.get(this.apiUrl + `/image/${id}`, { responseType: 'blob' });
  }

  modifyClub(formData: FormData, id: string): Observable<any> {
    return this.http.put(this.apiUrl + `/update/${id}`, formData);
  }

  deleteClub(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + `/delete/${id}`);
  }
  
}
