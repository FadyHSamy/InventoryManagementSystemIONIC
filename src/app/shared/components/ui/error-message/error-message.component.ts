import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class ErrorMessageComponent implements OnInit {
  @Input({ required: true }) control: AbstractControl | null | undefined = null; // FormControl or AbstractControl
  @Input({ required: false }) customErrors: { [key: string]: string } = {}; // Map custom messages to keys
  constructor() {}

  ngOnInit() {}

  get errorMessage(): string | null {
    if (this.control && this.control.errors && this.control.touched) {
      return this.getErrorMessage(this.control.errors);
    }
    return null;
  }

  private getErrorMessage(errors: ValidationErrors): string | null {
    for (const [errorKey, errorValue] of Object.entries(errors)) {
      // Check if a custom error message exists
      if (this.customErrors[errorKey]) {
        return this.customErrors[errorKey];
      }
      // Default error messages
      switch (errorKey) {
        case 'required':
          return 'This field is required.';
        case 'email':
          return 'Please enter a valid email.';
        case 'minlength':
          return `Minimum length is ${(errorValue as any).requiredLength}.`;
        case 'maxlength':
          return `Maximum length is ${(errorValue as any).requiredLength}.`;
        case 'pattern':
          return 'Invalid format.';
        default:
          return errorValue ? errorValue : `Invalid field: ${errorKey}`;
      }
    }
    return null;
  }
}
