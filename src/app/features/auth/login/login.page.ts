import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonButtons,
} from '@ionic/angular/standalone';
import { LinkComponent } from 'src/app/shared/components/ui/link/link.component';
import { ButtonComponent } from 'src/app/shared/components/ui/button/button.component';
import { ImageButtonComponent } from 'src/app/shared/components/ui/buttons/image-button/image-button.component';
import { CardContentComponent } from 'src/app/shared/components/ui/card/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/shared/components/ui/card/card-header/card-header.component';
import { CardTitleComponent } from 'src/app/shared/components/ui/card/card-title/card-title.component';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';
import { CheckboxComponent } from 'src/app/shared/components/ui/checkbox/checkbox.component';
import { InputComponent } from 'src/app/shared/components/ui/input/input.component';
import { LabelComponent } from 'src/app/shared/components/ui/label/label.component';
import { ImageComponent } from '../../../shared/components/ui/image/image.component';
import { InputValidationsService } from 'src/app/shared/services/input-validations.service';

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonCol,
    IonRow,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    LabelComponent,
    InputComponent,
    CardTitleComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    ButtonComponent,
    ImageButtonComponent,
    CheckboxComponent,
    LinkComponent,
    ImageComponent,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  loginFormGroup!: FormGroup<LoginForm>;
  constructor(
    private fb: FormBuilder,
    private inputValidationsService: InputValidationsService
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: new FormControl<string>('', [
        this.inputValidationsService.EmailValidator(),
      ]),
      password: new FormControl<string>('', [
        this.inputValidationsService.PasswordValidator(),
      ]),
    });
  }

  onSubmit() {
    if (this.loginFormGroup.invalid) return;

    const formControlsValue = this.loginFormGroup.value;
    console.log('formControlsValue', formControlsValue);
  }
}
