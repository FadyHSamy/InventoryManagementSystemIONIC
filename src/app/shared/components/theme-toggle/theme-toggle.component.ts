import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import {
  IonInput,
  IonCheckbox,
  IonIcon,
  IonLabel,
  IonItem,
  IonList,
  IonNote,
  IonToggle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  standalone: true,
  imports: [
    IonToggle,
    IonNote,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonCheckbox,
    IonInput,
  ],
})
export class ThemeToggleComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  isDarkMode: boolean = false;

  ngOnInit() {
    const theme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = theme === 'dark';
  }

  switchTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
