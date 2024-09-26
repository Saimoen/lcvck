import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import firebase from 'firebase/compat/app';
import { ArticlesService } from '../../shared/services/articles.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterModule, LeafletModule, NgFor, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ActualiteComponent {
  public articles: any = [];
  constructor(
    private articlesService: ArticlesService,
    private builder: FormBuilder,
  ) {}


  
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        attribution: '...',
      }),
    ],
    zoom: 10,
    center: L.latLng(-22.280849, 166.433937),
  };

  public data: any = [];
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.articlesService.getClub().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
      this.layers = [];
      this.data.forEach((element: any) => {
        console.log('element:', element);
        const marker = L.marker(
          [element.latitude, element.longitude],
          {
            // icon: L.icon({
            //   iconUrl: '../../assets/img/marker-icon.png',
            //   shadowUrl: '../../assets/marker-shadow.png',
            // ../../../assets/img/logo/olympique.jpg
            // }),
            icon: L.divIcon({
              className: 'custom-icon',
              html: `
              <img src="${element.image}" alt="marker-icon" style="width: 50px" />
              `,
            }),
          }
        ).on('click', (event) => {
          console.log('Yay, my marker was clicked!', event);
        });

        this.layers.push(marker);
      });
    });
  }

  getArticles() {
    this.articlesService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}
