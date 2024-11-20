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
  backGroundColor?: 'bg-black' | 'bg-white' | 'bg-transparent' | undefined;
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
  // @Input({ required: true }) cardProps!: CardProp;
  constructor() {}

  ngOnInit() {}
}
