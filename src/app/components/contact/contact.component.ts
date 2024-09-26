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
  public data: any = [];
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
