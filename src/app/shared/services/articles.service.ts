import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article.model';
import { Observable } from 'rxjs';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'http://localhost:8080/api/v1/clubs';

  getClub() {
    return this.http.get(this.apiUrl);
  }
}
