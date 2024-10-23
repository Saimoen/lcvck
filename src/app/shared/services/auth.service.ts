import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentProd } from '../../../environments/environment.prod';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  apiUrl = environmentProd.apiUrl;

  login(login: string, password: string) {
    return this.http.post(this.apiUrl + 'login', {login, password});
  }

  getAuthToken() {
    return window.localStorage.getItem('auth_token');
  }

  setAuthToken(token: string) {
    window.localStorage.setItem('auth_token', token);
  }

}
