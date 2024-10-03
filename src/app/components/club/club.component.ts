import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ClubService } from '../../shared/services/club.service';
import L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Club } from '../../shared/model/Club.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterModule, LeafletModule, NgFor, NgIf],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ClubsComponent {
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

  public datas: Club[] = [];
  public data?: Club;
  public markers: L.Marker[] = []; // Array to hold Leaflet markers
  public latitude: number = -22.280849;
  public longitude: number = 166.433937;
  public layers: L.Layer[] = [];
  public map!: L.Map;
  public selectedOption: string = 'Toutes';
  public authToken?: string | null;

  constructor(
    private clubService: ClubService,
    private authService: AuthService
  ) {}


  


  ngOnInit() {
    window.scrollTo(0, 0);
    this.authToken = this.authService.getAuthToken();
    this.clubService.getClub().subscribe((data: Club[]) => {
      this.datas = data;
      this.layers = [];
      this.datas.forEach((element: any) => {
        this.data = element;
        console.log(element);
        const marker = L.marker(
          [element.latitude, element.longitude],
          {
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

  selectChange(event: any) {
    this.selectedOption = event.target.value;
    console.log(this.selectedOption);
  }

  filterClub(type: string) {
    if(this.selectedOption === "Toutes") {
      return true;
    } else if (type === this.selectedOption) {
      return true;
    }
    return false;
  }

}
