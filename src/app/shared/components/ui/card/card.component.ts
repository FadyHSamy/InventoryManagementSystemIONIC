import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';

interface CardProp {
  shadow: boolean;
  border: boolean;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CardComponent implements OnInit {
  @Input({ required: true }) props!: CardProp;
  constructor() {}

  ngOnInit() {}
}
