import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  user: firebase.User | null = null;

  constructor(private userService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
      console.log('User:', user);
    });
  }

  logout() {
    this.userService.afAuth.signOut();
    this.router.navigateByUrl('/accueil');
  }
}
