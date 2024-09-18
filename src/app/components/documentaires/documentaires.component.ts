import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-documentaires',
  standalone: true,
  imports: [],
  templateUrl: './documentaires.component.html',
  styleUrl: './documentaires.component.scss'
})
export class DocumentairesComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
