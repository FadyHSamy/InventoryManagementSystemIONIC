import { Component, OnInit } from '@angular/core';
import {IonCardContent}from '@ionic/angular/standalone'
@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
  standalone:true,
  imports:[IonCardContent]
})
export class CardContentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
