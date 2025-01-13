import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormGroupService } from 'src/app/shared/services/formgroup/form-group.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CheckboxComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) formGroup: FormGroup | null = null;
  @Input({ required: false }) controlName: string = '';
  @Input({ required: false }) checked: boolean = false;
  fallbackFormGroup: FormGroup = new FormGroup({
    fallbackControl: new FormControl(this.checked),
  });
  isRequired: boolean = false;
  constructor(private formGroupService: FormGroupService) {}

  ngOnInit() {
    if (!this.formGroup) {
      this.formGroup = this.fallbackFormGroup;
      this.controlName = 'fallbackControl';
    }
    this.isRequired = this.formGroupService.isRequiredField(
      this.formGroup,
      this.controlName
    );
  }
}
