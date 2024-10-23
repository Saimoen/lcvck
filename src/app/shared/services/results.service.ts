import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course.model';
import { environmentProd } from '../../../environments/environment.prod';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  apiUrl = environmentProd.apiUrl + 'api/v1/resultats'

  getResults(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + "/get")
  }

    // Méthode pour récupérer les détails d'une course par son ID
    getCourseById(id: number): Observable<Course> {
      return this.http.get<Course>(`${this.apiUrl}/get/${id}`);
    }

  postResults(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl + "/create", course)
  }

  putResults(course: Course, id: number): Observable<Course> {
    return this.http.put<Course>(this.apiUrl + `/update/${id}`, course)
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(this.apiUrl + `/delete/${id}`)
  }
}
