import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly darkTheme = {
    '--ion-background-color': '#121212',
    '--ion-text-color': '#ffffff',
    '--ion-toolbar-background': '#1c1c1c',
    '--ion-toolbar-color': '#fff',
    '--ion-item-background': '#1c1c1c',
    '--ion-item-color': '#fff',
    '--primary-color': '#bb86fc',
  };

  private readonly lightTheme = {
    '--ion-background-color': '#ffffff',
    '--ion-text-color': '#000000',
    '--ion-toolbar-background': '#f8f8f8',
    '--ion-toolbar-color': '#000',
    '--ion-item-background': '#f8f8f8',
    '--ion-item-color': '#000',
    '--primary-color': '#3880ff',
  };

  constructor() {}

  toggleTheme(isDark: boolean): void {
    const theme = isDark ? this.darkTheme : this.lightTheme;
    this.applyTheme(theme);
  }

  private applyTheme(theme: { [key: string]: string }) {
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(key, theme[key]);
    });
  }
}
