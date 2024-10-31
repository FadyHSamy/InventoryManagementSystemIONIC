import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { TextComponent } from '../../../shared/components/ui/text/text.component';

import { LabelComponent } from '../../../shared/components/ui/label/label.component';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { CardContentComponent } from 'src/app/shared/components/ui/card/card-content/card-content.component';
import { CardTitleComponent } from 'src/app/shared/components/ui/card/card-title/card-title.component';
import { CardHeaderComponent } from 'src/app/shared/components/ui/card/card-header/card-header.component';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';

interface RegisterForm {
  formGroup: FormGroup;
}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
    TextComponent,
    CardContentComponent,
    CardTitleComponent,
    CardHeaderComponent,
    LabelComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
})
export class UserRegisterPage implements OnInit {
  constructor() {}
  registerForm!: RegisterForm;
  ngOnInit() {
    this.initState();
  }
  initState() {
    this.registerForm = {
      formGroup: new FormGroup({
        email: new FormControl<string | null>(null),
      }),
    };
  }
}
