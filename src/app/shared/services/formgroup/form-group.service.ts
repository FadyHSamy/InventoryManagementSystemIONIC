import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormGroupService {
  constructor() {}

  isRequiredField(formGroup: FormGroup, controlName: string): boolean {
    if (formGroup !== null) {
      const control = formGroup.get(controlName);
      if (control && control.validator) {
        const validator = control.validator({} as FormControl);
        if (validator && validator['required']) {
          return true;
        }
      }
    }
    return false;
  }
}
