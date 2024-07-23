import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { NgFor } from '@angular/common';
import { ResultsService } from '../../shared/services/results.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NgFor],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  results: any = [];

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(data => {
      this.results = data;
      console.log(this.results);
    });
  }



}
