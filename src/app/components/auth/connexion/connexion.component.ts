import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  public loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    debugger;
    const localUsers =  localStorage.getItem('angular17users');
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        alert("User Found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("No User Found")
      }
    }
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
