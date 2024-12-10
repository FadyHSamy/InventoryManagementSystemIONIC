import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

export type IonIconsNames = keyof typeof import('ionicons/icons'); // Keep this type

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [IonIcon, ReactiveFormsModule, CommonModule],
})
export class IconComponent implements OnInit {
  @Input({ required: true }) icon!: IonIconsNames;

  constructor() {}

  async ngOnInit() {
    if (!this.icon) return;

    const icon = await this.loadIcon(this.icon);

    if (icon) {
      addIcons({ [this.icon]: icon });
    }
  }

  async loadIcon(iconName: IonIconsNames): Promise<string | null> {
    try {
      const icons = await import('ionicons/icons');
      return icons[iconName] || null;
    } catch (error) {
      console.error('Error loading icon:', error);
      return null;
    }
  }
}
