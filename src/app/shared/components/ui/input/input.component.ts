import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IonInput, IonLabel, IonText } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';
import { InputType } from './input.interface';
import { ControlValueAccessorDirective } from 'src/app/shared/directives/control-value-accessor.directive';
import { ErrorInputComponent } from "../../error-input/error-input.component";

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
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
    ErrorInputComponent
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent<T> extends ControlValueAccessorDirective<T>
implements InputType
{
  @Input() id = '';
  @Input() css: InputType['css'] = 'input-primary';
  @Input() placeholder?: string | undefined;
  @Input() value?: string | number | undefined;
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() name!: string;
}
