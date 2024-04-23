import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: '...',
      }),
    ],
    zoom: 7,
    center: L.latLng(-22.280849,  166.433937),
  };
  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': L.tileLayer('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': L.circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': L.polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  }
  layers = [
    L.marker([ -22.280849, 166.433937], {
      icon: L.icon({
        iconUrl: '../../../assets/marker-icon.png',
        shadowUrl: '../../../assets/marker-shadow.png',
      })
    }).on('click', event => {
      console.log('Yay, my marker was clicked!', event);
    }),
  ];
  
  onMarkerClick(e: any) {
    console.log('Clic sur le marqueur :', e);
  }
}

// coordonnées lcvck
// -22.280849, 166.433937

//   polygon([[ -22.280849, 166.433937 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),

