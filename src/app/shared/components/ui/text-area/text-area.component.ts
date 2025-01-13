import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  imports: [
    LabelComponent,
    ErrorMessageComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class TextAreaComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) placeholder: string = '';
  @Input({ required: false }) formGroup: FormGroup | null = null;
  @Input({ required: false }) controlName: string = '';
  @Input({ required: false }) disabled: boolean = false; // Disable the input
  @Output() valueChange = new EventEmitter<string>(); // Emits value changes
  @Output() focus = new EventEmitter<void>(); // Emits when the input is focused
  @Output() blur = new EventEmitter<void>(); // Emits when the input loses focus

  constructor() {}

  fallbackFormGroup: FormGroup = new FormGroup({
    fallbackControl: new FormControl(''),
  });

  ngOnInit() {
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
