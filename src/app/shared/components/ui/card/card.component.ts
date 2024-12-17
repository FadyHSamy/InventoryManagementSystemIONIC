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
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CardComponent implements OnInit {

  @Input({required:false}) shadow: boolean = false;
  @Input({required:false}) border: boolean = false;
  constructor() {}

  ngOnInit() {}
}
