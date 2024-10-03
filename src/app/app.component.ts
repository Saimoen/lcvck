import { ContactComponent } from './components/contact/contact.component';
import { DocumentairesComponent } from './components/documentaires/documentaires.component';
import { ClubsComponent } from './components/club/club.component';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HistoireComponent } from './components/about/about.component';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './components/auth/connexion/connexion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HistoireComponent,
    ClubsComponent,
    DocumentairesComponent,
    ContactComponent,
    ConnexionComponent,
    RouterLink,
    NgIf,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'lcvck';

  isHomePage() {
    return this.router.url === '/accueil';
  }
}