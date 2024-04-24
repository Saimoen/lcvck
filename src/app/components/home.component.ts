import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';
import { LeafletDataService } from '../shared/services/leaflet-data.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public data: any = [];
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];

  constructor(private leafletDataService: LeafletDataService) {}

  ngOnInit() {
    this.leafletDataService.getCoordonnees().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.layers = []
      this.data.forEach((element: any) => {
          const marker = L.marker([ element.address.geo.lat, element.address.geo.lng ], {
            icon: L.icon({
              iconUrl: '../../assets/img/marker-icon.png',
              shadowUrl: '../../assets/marker-shadow.png',
            })
          }).on('click', event => {
            console.log('Yay, my marker was clicked!', event);
          })
          this.layers.push(marker)
      });
    });
    
  }


  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: '...',
      }),
    ],
    zoom: 7,
    center: latLng(-22.280849, 166.433937),
  };


}
