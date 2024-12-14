import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { IonToggle } from '@ionic/angular/standalone';
import { LabelComponent } from '../label/label.component';
import { FontAwesomeIconComponent } from '../font-awesome-icon/font-awesome-icon.component';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  imports: [IonToggle, LabelComponent, FontAwesomeIconComponent],
})
export class ThemeToggleComponent implements OnInit {
  constructor() {}

  themeService: ThemeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.initTheme();
  }
}
