import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ResultsService } from '../../shared/services/results.service';
import { RouterLink } from '@angular/router';
import { Course } from '../../shared/model/Course.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterLink],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results: Course[] = [];
  filteredResults: Course[] = [];
  selectedOption: number | null = null;
  visible: boolean = true;
  authService = inject(AuthService);
  token = this.authService.getAuthToken();

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(data => {
      this.results = data;
      console.log(this.results);
      this.filterResults();
    });
  }

  selectChange(event: any) {
    const selectedValue = event.target.value; 
    this.selectedOption = selectedValue ? +selectedValue : null;
    this.filterResults();
  }
  
  filterResults() {
    if (this.selectedOption === null) {
      this.filteredResults = this.results;
    } else {
      this.filteredResults = this.results.filter((result: any) => this.extractYear(result.date) === this.selectedOption);
    }
    this.visible = this.filteredResults.length > 0;
  }

  extractYear(dateString: string) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  postResults(course: Course) {
    this.resultsService.postResults(course).subscribe(() => {
      this.results.push(course);
      this.filterResults();
    });
  }
}
