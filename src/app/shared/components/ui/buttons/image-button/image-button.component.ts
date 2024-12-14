import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IconComponent, IonIconsNames } from '../../icon/icon.component';
import { ImageComponent } from '../../image/image.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface AssetImageProps {
  type: 'image';
  path: string;
  description?: string;
}

interface ImageButtonProps {
  label: string;
  icon?: string;
  ionIcon?: IonIconsNames;
  disabled?: boolean;
  onClick?: () => void;
  fill?: 'clear' | 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?:
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning';
  border?: boolean;
}
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
    ]
})
export class ImageButtonComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) icon?: string;
  @Input({ required: false }) ionIcon?: IonIconsNames;
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
  constructor() {}

  ngOnInit() {}
}
