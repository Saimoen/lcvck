import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course.model';
import { environmentProd } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  apiUrl = environmentProd.apiUrl + '/api/v1/resultats'

  getResults(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + "/get")
  }

  postResults(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl + "/create", course)
  }
}
