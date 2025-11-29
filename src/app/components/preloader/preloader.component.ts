import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preloader" [class.hidden]="isHidden">
      <div class="preloader-background"></div>
      <div class="preloader-content">
        <div class="logo-container">
          <img src="/assets/images/LandingAndBackgroundLogo.png" alt="Gentrobyte AI Labs" class="preloader-logo" />
        </div>
        <div class="loading-bar">
          <div class="loading-progress" [style.width.%]="progress"></div>
        </div>
        <p class="loading-text">Loading Experience...</p>
      </div>
    </div>
  `,
  styles: [`
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0a0a0f 0%, #151520 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease, visibility 0.5s ease;
      overflow: hidden;
    }

    .preloader-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/LandingAndBackgroundLogo.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.15;
      filter: blur(2px);
    }

    .preloader.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .preloader-content {
      text-align: center;
      width: 100%;
      max-width: 600px;
      padding: 20px;
      position: relative;
      z-index: 1;
    }

    .logo-container {
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: logoFloat 3s ease-in-out infinite;
    }

    .preloader-logo {
      max-width: 300px;
      width: 100%;
      height: auto;
      opacity: 0;
      transform: scale(0.8);
      filter: drop-shadow(0 0 20px rgba(0, 245, 255, 0.5));
    }

    @keyframes logoFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .loading-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .loading-progress {
      height: 100%;
      background: linear-gradient(90deg, #00f5ff, #b026ff, #0066ff);
      border-radius: 2px;
      transition: width 0.3s ease;
      box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
    }

    .loading-text {
      color: #00f5ff;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .logo-text {
        font-size: 2rem;
      }
    }
  `]
})
export class PreloaderComponent implements OnInit, OnDestroy {
  progress = 0;
  isHidden = false;
  private interval: any;

  ngOnInit(): void {
    this.animateLetters();
    this.animateProgress();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private animateLetters(): void {
    // Animate logo instead of letters
    gsap.to('.preloader-logo', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    });
  }

  private animateProgress(): void {
    let currentProgress = 0;
    this.interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        this.progress = 100;
        setTimeout(() => {
          this.hidePreloader();
        }, 500);
        clearInterval(this.interval);
      } else {
        this.progress = currentProgress;
      }
    }, 200);
  }

  private hidePreloader(): void {
    gsap.to('.preloader', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        this.isHidden = true;
      }
    });
  }
}

