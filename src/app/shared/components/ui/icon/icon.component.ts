import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

type IonIconsNames = keyof typeof import('ionicons/icons'); // Keep this type

export interface IonIconProp {
  name: IonIconsNames | undefined;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [IonIcon, ReactiveFormsModule, CommonModule],
})
export class IconComponent implements OnInit {
  visible?: boolean = false;
  @Input({ required: true }) IonIconProp!: IonIconProp;

  constructor() {}

  async ngOnInit() {
    this.visible = this.IonIconProp.name === undefined ? false : true;
    if (!this.IonIconProp.name) return;

    const icon = await this.loadIcon(this.IonIconProp.name);

    if (icon) {
      addIcons({ [this.IonIconProp.name]: icon });
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
