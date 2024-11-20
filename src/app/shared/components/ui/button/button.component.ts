import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface ButtonProps {
  label: string;
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton, IonicModule, CommonModule, ReactiveFormsModule],
})
export class ButtonComponent implements OnInit {
  @Input({ required: true }) props!: ButtonProps;

  constructor() {}

  ngOnInit() {}
}
