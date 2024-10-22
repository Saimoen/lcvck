import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../model/Club.model';
import { environmentProd } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }
  apiUrl: string = environmentProd.apiUrl + '/api/v1/clubs';

  getClub(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }
}
