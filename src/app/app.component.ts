import { ProfilComponent } from './components/auth/profil/profil.component';
import { ConnexionComponent } from './components/auth/connexion/connexion.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocumentairesComponent } from './components/documentaires/documentaires.component';
import { ActualiteComponent } from './components/club/club.component';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './components/events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ActualiteComponent,
    DocumentairesComponent,
    ContactComponent,
    ConnexionComponent,
    ProfilComponent,
    EventsComponent,
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
