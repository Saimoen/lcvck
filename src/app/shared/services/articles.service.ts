import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../model/Club.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'http://localhost:8080/api/v1/clubs';

  getClub(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }
}
