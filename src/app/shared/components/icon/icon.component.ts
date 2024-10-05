import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

export type IonIcons = keyof typeof import('ionicons/icons'); // Keep this type

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class IconComponent implements OnInit {
  @Input({ required: true }) iconName!: IonIcons;

  constructor() {}

  async ngOnInit() {
    const icon = await this.loadIcon(this.iconName);

    if (icon) {
      addIcons({ [this.iconName]: icon });
    }
  }

  async loadIcon(iconName: IonIcons): Promise<string | null> {
    try {
      const icons = await import('ionicons/icons');
      return icons[iconName] || null;
    } catch (error) {
      console.error('Error loading icon:', error);
      return null;
    }
  }
}
