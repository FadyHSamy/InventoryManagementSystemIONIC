import { Component, Input, OnInit } from '@angular/core';
import { IonInput, IonLabel, IonText } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ImageComponent } from '../image/image.component';

interface InputProps {
  id?: string;
  placeholder?: string;
  initialValue?: string;
  type: 'text' | 'password' | 'email' | 'number';
  icon?: string;
  label: string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonLabel,
    IonInput,
    FormsModule,
    ReactiveFormsModule,
    LabelComponent,
    CommonModule,
    IconComponent,
    ImageComponent,
  ],
})
export class InputComponent<T> implements OnInit {
  @Input({ required: true }) props!: InputProps;

  ngOnInit(): void {}
}
