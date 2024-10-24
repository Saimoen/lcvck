import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LeafletModule, NgIf, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;


  constructor(
    public router: Router
  ) {}

  ngOnInit() {
      this.layers = [];
        const marker = L.marker(
          [this.latitude, this.longitude],
          {
            icon: L.divIcon({
              className: 'custom-icon',
              html: `
              <img src="../../assets/img/icon/marker-icon.png" alt="marker-icon" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" />
              <div style="width: 330px; position: absolute; bottom: 20px;">
                <div class="card shadow card-body collapse" id="collapseExample">
                  <p class="card-text"><span class="fs-5">L</span>igue <span class="fs-5">C</span>alédonienne de <span class="fs-5">V</span>a'a et de <span class="fs-5">C</span>anoë <span class="fs-5">K</span>ayak</p>
                  <p class="fst-italic">Artillerie, Nouméa 98800,</p>
                  <p class="fst-italic">Nouméa 98800, Nouvelle-Calédonie</p>
                  <p class="fst-italic">📧 : drouetrb@lagoon.nc</p>
                  <p class="fst-italic">📞 : +687.79.10.08</p>
                </div>
              </div>
              `,
            }),
          }
        );
        this.layers.push(marker);
  }

  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        attribution: '...',
      }),
    ],
    zoom: 16,
    center: L.latLng(-22.280849, 166.433937),
  };
}
