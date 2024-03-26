import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClubComponent } from './components/club/club.component';
import { DocumentairesComponent } from './components/documentaires/documentaires.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: HomeComponent },
    { path: 'apropos', component: AboutComponent },
    { path: 'lesclubs', component: ClubComponent },
    { path: 'documentaires', component: DocumentairesComponent },
    { path: 'contact', component: ContactComponent },
  ];