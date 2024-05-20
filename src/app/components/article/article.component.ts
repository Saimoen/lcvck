import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
