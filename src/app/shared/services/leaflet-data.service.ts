import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeafletDataService {

  constructor(private http: HttpClient) { }

  getCoordonnees() {
    return this.http.get('../../../assets/data/data.json')
  }
}
