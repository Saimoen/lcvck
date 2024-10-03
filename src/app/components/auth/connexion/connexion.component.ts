import { CommonModule, NgSwitch } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgSwitch, FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  public identifiant : string = '';
  public password : string = '';

  public connexionForm = this.formBuilder.group({
    login: '',
    password: ''
  });
  

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  login() {
    console.log()
    const login = this.connexionForm.value.login ?? '';
    const password = this.connexionForm.value.password ?? '';
    this.authService.login(login, password).subscribe(
      (response: any) => {
        this.authService.setAuthToken(response.token);
        this.router.navigate(['/profil']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
