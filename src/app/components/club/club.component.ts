import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { NgFor, NgIf } from '@angular/common';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ActualiteComponent {
  public articles: any = [];
  user: firebase.User | null = null;

  constructor(
    private dataService: DataService,
    private userService: AuthService
  ) {}

  ngOnInit() {
    this.dataService.getArticles().subscribe((data) => {
      this.articles = data;
      console.log(this.articles);
    });

    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User:', user);
    });
  }

  addArticle() {
    this.dataService
      .addArticle({
        title: 'New Article',
        content: 'This is a new article',
      })
      .subscribe((data) => {
        console.log('Article added successfully!');
      });
  }
}
