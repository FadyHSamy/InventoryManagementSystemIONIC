import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { FormGroupService } from 'src/app/shared/services/formgroup/form-group.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [
    LabelComponent,
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
})
export class SelectComponent<T> implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) placeHolder: string = '';
  @Input({ required: false }) formGroup: FormGroup | null = null;
  @Input({ required: false }) controlName: string = ''; // For reactive forms
  @Input({ required: false }) disabled: boolean = false; // Disable the input
  @Output() valueChange = new EventEmitter<string>(); // Emits value changes
  @Output() focus = new EventEmitter<void>(); // Emits when the input is focused
  @Output() blur = new EventEmitter<void>(); // Emits when the input loses focus
  @Input({ required: true }) optionLabel!: string;
  @Input({ required: true }) optionKey!: string;
  @Input({ required: false }) optionList: { [key: string]: T }[] = [];

  constructor(private formGroupService: FormGroupService) {}

  fallbackFormGroup: FormGroup = new FormGroup({
    fallbackControl: new FormControl(''),
  });
  isRequired: boolean = false;

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
