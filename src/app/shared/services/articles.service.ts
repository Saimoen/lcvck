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

  getArticles() {
    return this.http.get<Article[]>(this.apiUrl)
  }

  getArticle(id: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post(this.apiUrl, article)
  }

  // async createArticle(article: Article) {
  //   try {
  //     const docRef = await addDoc(collection(db, "article"), {
  //       author: article.author,
  //       title: article.title,
  //       content: article.content,
  //       date: article.date,
  //       image: article.image
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

}
