import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  user: firebase.User | null = null;


  constructor(
    private userService: AuthService,
    private router: Router
  ) {}

  ngOnInit() { 
    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User:', user);
    });
  }

  logout() {
    this.userService.afAuth.signOut();
    this.router.navigateByUrl('/accueil');
  }
}
