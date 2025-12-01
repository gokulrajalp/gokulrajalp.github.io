import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AnimatedCursorComponent } from './components/animated-cursor/animated-cursor.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PreloaderComponent,
    AnimatedCursorComponent,
    NavigationComponent,
    FooterComponent
  ],
  template: `
    <app-preloader></app-preloader>
    <app-animated-cursor></app-animated-cursor>
    <app-navigation></app-navigation>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: 100vh;
      position: relative;
      z-index: 1;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize smooth scroll
    this.initSmoothScroll();
    // Scroll to top on route change
    this.scrollToTopOnNavigation();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private initSmoothScroll(): void {
    // Smooth scroll implementation
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  private scrollToTopOnNavigation(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        // Also scroll main content if needed
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTop = 0;
        }
      });
  }
}

