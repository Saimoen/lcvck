import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [NgIf],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  standalone: true,
})
export class BackToTopComponent {
  isVisible: boolean = false;

  // Utilisation de HostListener pour détecter le scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 100;
  }

  // Fonction de retour en haut
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
