import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HistoireComponent } from './components/about/about.component';
import { ClubsComponent } from './components/club/club.component';
import { DocumentairesComponent } from './components/documentaires/documentaires.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnexionComponent } from './components/auth/connexion/connexion.component';
import { ResultComponent } from './components/result/result.component';
import { ProfilComponent } from './components/auth/profil/profil.component';
import { authGuard } from './shared/guard/auth.guard';
import { connexionGuard } from './shared/guard/connexion.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'histoire', component: HistoireComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'connexion', component: ConnexionComponent, canActivate: [connexionGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [authGuard] },
  { path: 'competitions', component: ResultComponent },
  { path: 'documentaires', component: DocumentairesComponent },
  { path: 'contact', component: ContactComponent },

];
