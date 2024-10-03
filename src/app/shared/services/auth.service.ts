import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  apiUrl = 'http://localhost:8080/login'

  login(login: string, password: string) {
    return this.http.post(this.apiUrl, {login, password});
  }

  getAuthToken() {
    return window.localStorage.getItem('auth_token');
  }

  setAuthToken(token: string) {
    window.localStorage.setItem('auth_token', token);
  }

}
