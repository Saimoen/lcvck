import { Component, inject, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from '../../shared/services/auth.service';
import { ArticlesService } from '../../shared/services/articles.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ref, Storage, percentage } from '@angular/fire/storage';
import { uploadBytesResumable } from 'firebase/storage';

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
  file!: File;
  progress = signal(0);

  private readonly _storage = inject(Storage);

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
  });

  ngOnInit() {
    this.getArticles();

    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User:', user);
    });

    (window as any).fbAsyncInit = function () {
      (window as any).FB.init({
        xfbml: true,
        version: 'v10.0',
      });
    };
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
    };
    this.articlesService.createArticle(_obj).then((data) => {
      this.getArticles();
    });
  }

  changeInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('inputElement:', this._storage);
    if (inputElement.files) {
      this.file = inputElement.files![0];
      this.uploadFile();
    }
  }

  uploadFile(): void {
    const storageRef = ref(this._storage, `upload/${this.file.name}`);
    const task = uploadBytesResumable(storageRef, this.file);
    percentage(task).subscribe((percentage) => {
      console.log(`Uploading: ${percentage}%`);
  });
}
}
