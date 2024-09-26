import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about/about.component';
import { ActualiteComponent } from './components/club/club.component';
import { DocumentairesComponent } from './components/documentaires/documentaires.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArticleComponent } from './components/article/article.component';
import { EventsComponent } from './components/events/events.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'actualites', component: ActualiteComponent },
  { path: 'actualites/article/:id', component: ArticleComponent },
  { path: 'evenements', component: EventsComponent },
  { path: 'competitions', component: ResultComponent },
  { path: 'documentaires', component: DocumentairesComponent },
  { path: 'contact', component: ContactComponent },

];
