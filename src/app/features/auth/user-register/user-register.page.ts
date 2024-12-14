import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonButtons, IonRow, IonCol } from '@ionic/angular/standalone';
import { LabelComponent } from '../../../shared/components/ui/label/label.component';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { CardContentComponent } from 'src/app/shared/components/ui/card/card-content/card-content.component';
import { CardTitleComponent } from 'src/app/shared/components/ui/card/card-title/card-title.component';
import { CardHeaderComponent } from 'src/app/shared/components/ui/card/card-header/card-header.component';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';
import { ButtonComponent } from '../../../shared/components/ui/buttons/button/button.component';
import { ImageButtonComponent } from "../../../shared/components/ui/buttons/image-button/image-button.component";
import { CheckboxComponent } from "../../../shared/components/ui/checkbox/checkbox.component";
import { LinkComponent } from "../../../shared/components/ui/link/link.component";

interface RegisterForm {
  formGroup: FormGroup;
}
@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.page.html',
    styleUrls: ['./user-register.page.scss'],
    imports: [IonCol, IonRow,
        IonButtons,
        LabelComponent,
        InputComponent,
        CardTitleComponent,
        CardComponent,
        CardHeaderComponent,
        CardContentComponent,
        ButtonComponent,
        ImageButtonComponent, CheckboxComponent, LinkComponent]
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
