import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { IconComponent, IonIconsNames } from '../icon/icon.component';
import { InputMaskDirective } from 'src/app/shared/directives/input-mask/input-mask.directive';
import { FormGroupService } from 'src/app/shared/services/formgroup/form-group.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LabelComponent,
    CommonModule,
    ImageComponent,
    ErrorMessageComponent,
    IconComponent,
    InputMaskDirective,
  ],
})
export class InputComponent implements OnInit {
  @Input({ required: false }) type: 'text' | 'password' | 'email' | 'number' =
    'text';
  @Input({ required: false }) placeHolder: string = '';
  @Input({ required: false }) icon?: string | null = null;
  @Input({ required: false }) ionIcon?: IonIconsNames;
  @Input({ required: false }) label: string = '';
  @Input({ required: false }) id!: string; // Associates the input with a label
  @Input({ required: false }) formGroup: FormGroup | null = null;
  @Input({ required: false }) controlName: string = ''; // For reactive forms
  @Input({ required: false }) errorMessage?: string; // Custom error message
  @Input({ required: false }) disabled: boolean = false; // Disable the input
  @Output() valueChange = new EventEmitter<string>(); // Emits value changes
  @Output() focus = new EventEmitter<void>(); // Emits when the input is focused
  @Output() blur = new EventEmitter<void>(); // Emits when the input loses focus

  fallbackFormGroup: FormGroup = new FormGroup({
    fallbackControl: new FormControl(''),
  });
  isRequired: boolean = false;

  constructor(private formGroupService: FormGroupService) {}

  ngOnInit(): void {
    if (!this.formGroup) {
      this.formGroup = this.fallbackFormGroup;
      this.controlName = 'fallbackControl';
    }
    this.isRequired = this.formGroupService.isRequiredField(
      this.formGroup,
      this.controlName
    );
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
