import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class HistoireComponent implements OnInit {

  ngOnInit(): void {
      window.scrollTo(0, 0);
  }
 
}
