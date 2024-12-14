import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

export type IonIconsNames = keyof typeof allIcons;

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [IonIcon, ReactiveFormsModule, CommonModule],
})
export class IconComponent implements OnInit {
  @Input({ required: true }) icon!: IonIconsNames;

  constructor() {}

  ngOnInit() {
    const icon = allIcons[this.icon];
    if (icon) {
      addIcons({ [this.icon]: icon });
    }
  }
}
