import { Component, OnInit } from '@angular/core';
import {IonCardHeader} from '@ionic/angular/standalone'
@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  standalone:true,
  imports:[IonCardHeader]
})
export class CardHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
