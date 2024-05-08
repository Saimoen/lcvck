import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { LeafletDataService } from '../../shared/services/leaflet-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public data: any = [];
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;

  constructor(private leafletDataService: LeafletDataService) {}

  ngOnInit() {
    this.leafletDataService.getCoordonnees().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
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
                </div>
              </div>
              `,
            })            
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
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        attribution: '...',
      }),
    ],
    zoom: 16,
    center: L.latLng(-22.280849, 166.433937),
  };
}

// coordonnées lcvck
// -22.280849, 166.433937

//   polygon([[ -22.280849, 166.433937 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),

