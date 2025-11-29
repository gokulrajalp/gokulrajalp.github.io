import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(true);
  public isDarkMode$: Observable<boolean> = this.isDarkModeSubject.asObservable();

  constructor() {
    // Initialize with dark mode
    this.isDarkModeSubject.next(true);
    this.applyTheme(true);
  }

  toggleTheme(): void {
    const current = this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(!current);
    this.applyTheme(!current);
  }

  setDarkMode(isDark: boolean): void {
    this.isDarkModeSubject.next(isDark);
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.background = '#0a0a0f';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = '#ffffff';
    }
  }
}

