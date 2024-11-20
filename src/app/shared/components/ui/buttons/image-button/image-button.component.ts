import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IconComponent, IonIconProp } from '../../icon/icon.component';
import { ImageComponent } from '../../image/image.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface IonIconProps {
  type: 'icon';
  name: IonIconProp['name'];
}

interface AssetImageProps {
  type: 'image';
  path: string;
  description?: string;
}

type ImageSource = IonIconProps | AssetImageProps;

interface ImageButtonProps {
  label: string;
  image: ImageSource;
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
  standalone: true,
  imports: [
    IonButton,
    IconComponent,
    ImageComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class ImageButtonComponent implements OnInit {
  @Input({ required: true }) imageButtonProps!: ImageButtonProps;
  constructor() {}

  ngOnInit() {}

  get isIcon() {
    return this.imageButtonProps.image.type === 'icon';
  }

  get isImage() {
    return this.imageButtonProps.image.type === 'image';
  }

  get iconInformation() {
    return this.isIcon ? (this.imageButtonProps.image as IonIconProps) : null;
  }

  get assetImageInformation() {
    return this.isImage
      ? (this.imageButtonProps.image as AssetImageProps)
      : null;
  }
}
