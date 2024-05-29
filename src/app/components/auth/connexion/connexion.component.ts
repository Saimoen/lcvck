import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  constructor(public auth: AngularFireAuth, private router: Router, private userService: AuthService) {}

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        // Successfully signed in
        this.redirectProfil();
        this.userService.userSubject.next(userCredential.user);
        console.log('Logged in:', userCredential);
      })
      .catch(error => {
        // Handle Errors here.
        console.error('Login error:', error);
      });
  }

  register() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        // Successfully registered
        console.log('Registered:', userCredential);
      })
      .catch(error => {
        // Handle Errors here.
        console.error('Registration error:', error);
      });
  }

  logout() {
    this.auth.signOut();
  }

  redirectProfil() {
    this.router.navigateByUrl('/profil');
  }
}
