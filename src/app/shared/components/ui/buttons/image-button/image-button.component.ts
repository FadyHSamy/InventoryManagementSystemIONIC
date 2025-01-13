import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IconComponent, IonIconsNames } from '../../icon/icon.component';
import { ImageComponent } from '../../image/image.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconComponent } from '../../font-awesome-icon/font-awesome-icon.component';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss'],
  imports: [
    IonButton,
    IconComponent,
    ImageComponent,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeIconComponent,
  ],
})
export class ImageButtonComponent implements OnInit {
  @Input({ required: false }) label: string = '';
  @Input({ required: false }) icon?: string;
  @Input({ required: false }) ionIcon?: IonIconsNames;
  @Input({ required: false }) fontIcon?: keyof typeof icons;
  @Input({ required: false }) disabled?: boolean;
  @Input({ required: false }) onClick?: () => void;
  @Input({ required: false }) fill?: 'clear' | 'solid' | 'outline';
  @Input({ required: false }) size?: 'small' | 'medium' | 'large';
  @Input({ required: false }) color?:
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning';
  @Input({ required: false }) border?: boolean;
  @Output() clicked = new EventEmitter<void>(); // Emits when the input loses focus
  constructor() {}

  ngOnInit() {}
  buttonClicked() {
    this.clicked.emit();
  }
}
