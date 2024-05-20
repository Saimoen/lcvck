import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss'
})
export class ActualiteComponent {
  public articles: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getArticles().subscribe((data) => {
      this.articles = data;
      console.log(this.articles);
    });
  }

}
