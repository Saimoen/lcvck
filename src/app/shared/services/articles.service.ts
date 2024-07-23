import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'api/articles/';

  getArticles() {
    return this.http.get<Article[]>(this.apiUrl)
  }

  getArticle(id: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post(this.apiUrl, article)
  }

}
