import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about/about.component';
import { ActualiteComponent } from './components/club/club.component';
import { DocumentairesComponent } from './components/documentaires/documentaires.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArticleComponent } from './components/article/article.component';
import { ConnexionComponent } from './components/auth/connexion/connexion.component';
import { ProfilComponent } from './components/auth/profil/profil.component';
import { authGuard } from './shared/services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'actualites', component: ActualiteComponent },
  { path: 'actualites/article/:id', component: ArticleComponent },
  { path: 'documentaires', component: DocumentairesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', component: HomeComponent, children: [
    { path: 'profil', component: ProfilComponent, canActivate: [authGuard]}
  ] },
];
