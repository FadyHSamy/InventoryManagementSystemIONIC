import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [ IonicModule, CommonModule, ReactiveFormsModule]
})
export class ButtonComponent implements OnInit {
  @Input({ required: true }) buttonName: string = '';
  @Input({ required: false }) type: 'submit' | 'reset' | 'button' = 'button';
  @Input({ required: false }) color: 'red' | 'blue' | 'light' = 'blue';
  @Output() clicked = new EventEmitter<void>(); // Emits when the input loses focus

  constructor() {}

  ngOnInit() {}
  onClicked(): void {
    this.clicked.emit(); // Emit the updated value to the parent
  }
  get buttonClass(): string {
    switch (this.color) {
      case 'blue':
        return 'btn-blue';
      case 'light':
        return 'btn-light';
      case 'red':
        return 'btn-red';
      default:
        return '';
    }
  }
}
