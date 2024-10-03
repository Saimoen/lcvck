import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  router = inject(Router);
  authService = inject(AuthService);

  get isAuthenticated(): boolean {
    return !!this.authService.getAuthToken(); // retourne true si le token existe, false sinon
  }

  disconnect() {
    const token = this.authService.getAuthToken();
    if (token) {
      window.localStorage.removeItem('auth_token');
      this.router.navigate(['/accueil']);
    }
  }
}
