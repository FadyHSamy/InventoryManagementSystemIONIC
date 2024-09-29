import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

export interface ButtonComponentInterface {
  buttonName: string;
  buttonColor: string;
  isDisabled?: boolean;
}

@Component({
  selector: 'ionButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class ButtonComponent implements OnInit {
  @Input({ required: true }) buttonInputs!: ButtonComponentInterface;

  constructor() {}

  ngOnInit() {
    if (!this.buttonInputs) {
      this.buttonInputs = {
        buttonName: 'Default Button',
        buttonColor: 'primary',
        isDisabled: false,
      };
    }
  }
}
