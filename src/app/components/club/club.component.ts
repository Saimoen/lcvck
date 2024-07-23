import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from '../../shared/services/auth.service';
import { ArticlesService } from '../../shared/services/articles.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ActualiteComponent {
  public articles: any = [];
  user: firebase.User | null = null;
  currentFile?: File;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;

  constructor(
    private articlesService: ArticlesService,
    private userService: AuthService,
    private builder: FormBuilder
  ) {}

  articleForm = this.builder.group({
    date: this.builder.control('', Validators.required),
    author: this.builder.control('', Validators.required),
    title: this.builder.control('', Validators.required),
    content: this.builder.control('', Validators.required),
    image: this.builder.control('', Validators.required),
  })

  ngOnInit() {
    this.getArticles();

    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User:', user);
    });
  }

  getArticles() {
    this.articlesService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  addArticle() {
    let _obj: any = {
      id: (this.articles.length + 1).toString() as string,
      author: this.articleForm.value.author as string,
      date: this.articleForm.value.date as string,
      title: this.articleForm.value.title as string,
      content: this.articleForm.value.content as string,
      image: this.articleForm.value.image,
    }
    this.articlesService
      .addArticle(_obj)
      .subscribe((data) => {
        this.getArticles();
      });
  }

}
