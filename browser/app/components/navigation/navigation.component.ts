import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <img src="/assets/images/LandingAndBackgroundLogo.png" alt="Gentrobyte AI Labs" class="logo-image" />
        </a>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
          <a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projects</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </div>
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px 0;
      z-index: 1000;
      transition: all 0.3s ease;
      background: transparent;
    }

    .navbar.scrolled {
      background: rgba(10, 10, 15, 0.8);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 15px 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      z-index: 1;
      height: 40px;
    }

    .logo-image {
      height: 40px;
      width: auto;
      object-fit: contain;
      transition: transform 0.3s ease;
      filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.5));
    }

    .logo:hover .logo-image {
      transform: scale(1.05);
      filter: drop-shadow(0 0 15px rgba(0, 245, 255, 0.8));
    }

    .nav-links {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    .nav-links a {
      color: #ffffff;
      text-decoration: none;
      font-weight: 500;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #00f5ff, #b026ff);
      transition: width 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #00f5ff;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 5px;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: #00f5ff;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 0 20px;
      }

      .logo-image {
        height: 30px;
      }

      .menu-toggle {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background: rgba(10, 10, 15, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        transition: right 0.3s ease;
        padding: 20px;
      }

      .nav-links.active {
        right: 0;
      }

      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }

      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }

      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  `]
})
export class NavigationComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

