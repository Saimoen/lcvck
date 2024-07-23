import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeafletDataService {

  constructor(private http: HttpClient) { }
  apiUrl = '/api/coordonnees'

  getCoordonnees() {
    return this.http.get(this.apiUrl)
  }
}
