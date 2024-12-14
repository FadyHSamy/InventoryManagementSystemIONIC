import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  FaIconLibrary,
  FontAwesomeModule,
  SizeProp,
} from '@fortawesome/angular-fontawesome';

import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-awesome-icon',
  templateUrl: './font-awesome-icon.component.html',
  styleUrls: ['./font-awesome-icon.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class FontAwesomeIconComponent implements OnInit {
  @Input({ required: true }) icon!: keyof typeof icons;
  @Input({ required: false }) size: SizeProp = 'lg'
  iconDefinition!: IconDefinition;

  constructor(private library: FaIconLibrary) {}

  ngOnInit() {
    const iconDefinition = icons[this.icon] as IconDefinition;

    if (iconDefinition) {
      this.library.addIcons(iconDefinition);
      this.iconDefinition = iconDefinition;
    } else {
      console.error(`Icon "${this.icon}" not found in FontAwesome library.`);
    }
  }
}
