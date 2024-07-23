import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  apiUrl = '/api/resultats'

  getResults() {
    return this.http.get(this.apiUrl)
  }
}
