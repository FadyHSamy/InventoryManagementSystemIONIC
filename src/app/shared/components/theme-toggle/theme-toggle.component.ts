import { Component, inject, OnInit, signal } from '@angular/core';
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
  constructor() {}

  themeService: ThemeService = inject(ThemeService);

  ngOnInit() {}
  test: boolean = false;
  toggleTheme() {
    this.test
      ? this.themeService.setLightTheme()
      : this.themeService.setDarkTheme();
    this.test = !this.test;
  }
}
