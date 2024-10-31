import { Injectable, signal } from '@angular/core';

export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

const isClient = typeof localStorage !== 'undefined';
const THEME_KEY = 'theme';
const defaultTheme = isClient ? (localStorage.getItem(THEME_KEY) as AppTheme) : undefined;


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal<AppTheme | undefined>(defaultTheme);

  setLightTheme() {
    this.setTheme(AppTheme.LIGHT);
    this.removeHtmlClass('dark');
  }

  setDarkTheme() {
    this.setTheme(AppTheme.DARK);
    this.addHtmlClass('dark');
  }

  toggleTheme() {
    this.isDarkTheme() ? this.setLightTheme() : this.setDarkTheme();
  }

  isDarkTheme() {
    return this.currentTheme() === AppTheme.DARK;
  }

  initTheme() {
    this.isDarkTheme() ? this.setDarkTheme() : this.setLightTheme();
  }

  // Private helper methods
  private setTheme(theme: AppTheme) {
    this.currentTheme.set(theme);
    this.saveThemeToLocalStorage(theme);
  }

  private addHtmlClass(className: string) {
    if (isClient) {
      document.documentElement.classList.add(className);
    }
  }

  private removeHtmlClass(className: string) {
    if (isClient) {
      document.documentElement.classList.remove(className);
    }
  }

  private saveThemeToLocalStorage(theme: AppTheme) {
    if (isClient) {
      localStorage.setItem(THEME_KEY, theme);
    }
  }

  private getSavedTheme() {
    return (localStorage?.getItem(THEME_KEY) || AppTheme.LIGHT) as AppTheme;
  }
}
