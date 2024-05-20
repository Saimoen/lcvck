import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';
import { LeafletDataService } from '../shared/services/leaflet-data.service';
import * as L from 'leaflet';
import { RouterModule } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeafletModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public data: any = [];
  public articles: any = [];
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;

  constructor(
    private leafletDataService: LeafletDataService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.leafletDataService.getCoordonnees().subscribe((data) => {
      this.data = data;
      this.layers = [];
      this.data.forEach((element: any) => {
        const marker = L.marker(
          [element.address.geo.lat, element.address.geo.lng],
          {
            // icon: L.icon({
            //   iconUrl: '../../assets/img/marker-icon.png',
            //   shadowUrl: '../../assets/marker-shadow.png',
            // }),
            icon: L.divIcon({
              className: 'custom-icon',
              html: `
              <img src="../../assets/img/marker-icon.png" alt="marker-icon" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" />
              <div style="width: 330px; position: absolute; bottom: 20px;">
                <div class="card card-body collapse" id="collapseExample">
                  <p class="card-text"><span class="fs-5">L</span>igue <span class="fs-5">C</span>alédonienne de <span class="fs-5">V</span>a'a et de <span class="fs-5">C</span>anoë <span class="fs-5">K</span>ayak</p>
                  <p class="fst-italic">Artillerie, Nouméa 98800,</p>
                  <p class="fst-italic">Nouméa 98800, Nouvelle-Calédonie</p>
                  <p class="fst-italic">📧 :</p>
                  <p class="fst-italic">📞 : </p>
                </div>
              </div>
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

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        attribution: '...',
      }),
    ],
    zoom: 16,
    center: latLng(-22.280849, 166.433937),
  };
}
