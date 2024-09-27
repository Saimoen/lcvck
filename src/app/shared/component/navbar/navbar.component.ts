import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
}
