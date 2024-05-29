import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userSubject = new BehaviorSubject<firebase.User | null>(null);
  user$ = this.userSubject.asObservable();
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
    
  ) {
    this.afAuth.authState.subscribe(user => {
      this.userSubject.next(user);
    });
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider | GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUser(): firebase.User | null {
    return this.userSubject.value;
  }
}