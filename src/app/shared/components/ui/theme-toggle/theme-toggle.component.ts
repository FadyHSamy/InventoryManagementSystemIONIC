import { Component, inject, OnInit, signal } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
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
import { LabelComponent } from '../label/label.component';
import { IconComponent } from '../icon/icon.component';

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
    LabelComponent,
    IconComponent
],
})
export class ThemeToggleComponent implements OnInit {
  constructor() {}

  themeService: ThemeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.initTheme();
  }
}
