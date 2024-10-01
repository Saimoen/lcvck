import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ResultsService } from '../../shared/services/results.service';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterLink],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  results: any = [];
  filteredResults: any = [];
  selectedOption: number = 2024;
  visible: boolean = true;

  constructor(private resultsService: ResultsService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(data => {
      this.results = data;
      this.filterResults();
    });
  }

  selectChange(event: any) {
    this.selectedOption = +event.target.value; // Convertir la valeur en nombre
    this.filterResults();
  }

  filterResults() {
    this.filteredResults = this.results.filter((result: any) => this.extractYear(result.date) === this.selectedOption);
    this.visible = this.filteredResults.length > 0;
  }

  extractYear(dateString: string) {
    const date = new Date(dateString);
    return date.getFullYear();
  }
}
