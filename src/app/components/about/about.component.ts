import {
  Component,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { EventColor } from 'calendar-utils';
import { CommonModule, NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
      window.scrollTo(0, 0);
  }
 
}
