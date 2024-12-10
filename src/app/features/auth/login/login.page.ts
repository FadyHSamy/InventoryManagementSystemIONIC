import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonRow, IonCol } from '@ionic/angular/standalone';
import { LinkComponent } from 'src/app/shared/components/ui/link/link.component';
import { ButtonComponent } from 'src/app/shared/components/ui/buttons/button/button.component';
import { CardContentComponent } from 'src/app/shared/components/ui/card/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/shared/components/ui/card/card-header/card-header.component';
import { CardTitleComponent } from 'src/app/shared/components/ui/card/card-title/card-title.component';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';
import { InputComponent } from 'src/app/shared/components/ui/input/input.component';
import { LabelComponent } from 'src/app/shared/components/ui/label/label.component';
import { ImageComponent } from '../../../shared/components/ui/image/image.component';
import { InputValidationsService } from 'src/app/shared/services/input-validations/input-validations.service';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { firstValueFrom, take } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

interface LoginForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    CommonModule,
    FormsModule,
    LabelComponent,
    InputComponent,
    CardTitleComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    ButtonComponent,
    LinkComponent,
    ImageComponent,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  loginFormGroup!: FormGroup<LoginForm>;
  constructor(
    private fb: FormBuilder,
    private inputValidationsService: InputValidationsService,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [
        this.inputValidationsService.PasswordValidator(),
      ]),
    });
  }

  async onSubmit() {
    this.loginFormGroup.markAllAsTouched();
    if (this.loginFormGroup.invalid) return;
    const formControlsValue = this.loginFormGroup.value;

    this.authService.login({
      username: formControlsValue.username!,
      password: formControlsValue.password!,
    });
  }
}
