import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InputValidationsService {
  constructor() {}

  NoWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      let isWhitespace = (control.value || '').trim().length === 0;
      let isValid = !isWhitespace;
      return isValid ? null : { whitespace: 'value is only whitespace' };
    };
  }

  EmailValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const email = control.value as string;

      // Check if value is only whitespace
      if (email.trim().length === 0) {
        return { whitespace: 'Value is only whitespace' };
      }

      // Check if value is a valid email
      const emailValidation = Validators.email(control);
      if (emailValidation) {
        return { email: 'Invalid email format' };
      }

      return null; // Valid input
    };
  }

  PasswordValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const password = control.value as string;

      // Check if value is only whitespace
      if (password.trim().length === 0) {
        return { whitespace: 'Password is only whitespace' };
      }

      // Check if password length is less than 6
      if (password.length < 6) {
        return { minimumLength: 'Password must be at least 6 characters long' };
      }

      return null; // Valid input
    };
  }
}
