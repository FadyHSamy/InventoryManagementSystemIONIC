import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonInput, IonLabel, IonText } from '@ionic/angular/standalone';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ImageComponent } from '../image/image.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

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
    ErrorMessageComponent,
  ],
})
export class InputComponent implements OnInit {
  @Input({ required: true }) type: 'text' | 'password' | 'email' | 'number' =
    'text';
  @Input({ required: true }) placeHolder: string = '';
  @Input({ required: false }) icon?: string;
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) id!: string; // Associates the input with a label
  @Input({ required: false }) formGroup: FormGroup | null = null;
  @Input({ required: false }) controlName: string = ''; // For reactive forms
  @Input({ required: false }) required: boolean = false; // Mark the input as required
  @Input({ required: false }) errorMessage?: string; // Custom error message
  @Input({ required: false }) disabled: boolean = false; // Disable the input
  @Output() valueChange = new EventEmitter<string>(); // Emits value changes
  @Output() focus = new EventEmitter<void>(); // Emits when the input is focused
  @Output() blur = new EventEmitter<void>(); // Emits when the input loses focus

  fallbackFormGroup: FormGroup = new FormGroup({
    fallbackControl: new FormControl(''),
  });
  ngOnInit(): void {
    if (!this.formGroup) {
      this.formGroup = this.fallbackFormGroup;
      this.controlName = 'fallbackControl';
    }
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value); // Emit the updated value to the parent
  }

  onFocus(): void {
    this.focus.emit(); // Notify parent that input is focused
  }

  onBlur(): void {
    this.blur.emit(); // Notify parent that input lost focus
  }
}
