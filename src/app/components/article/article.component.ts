import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticlesService } from '../../shared/services/articles.service';
import { Article } from '../../shared/model/Article.model';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent  implements OnInit {
  article?: Article;

  constructor(private articlesService: ArticlesService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      const articleId = params['id'];
      this.articlesService.getArticle(articleId).subscribe((data) => {
        data.forEach((article) => {
          this.article = article;
        });
      });
    });
  }
}
