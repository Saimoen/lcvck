import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  apiUrl = environment.apiUrl;

  login(login: string, password: string) {
    return this.http.post(this.apiUrl + 'api/v1/auth', {login, password});
  }

  getAuthToken() {
    return window.localStorage.getItem('auth_token');
  }

  setAuthToken(token: string) {
    window.localStorage.setItem('auth_token', token);
  }

}
