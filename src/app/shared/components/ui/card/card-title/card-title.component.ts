import { Component, OnInit } from '@angular/core';
import{IonCardTitle} from '@ionic/angular/standalone'
@Component({
    selector: 'app-card-title',
    templateUrl: './card-title.component.html',
    styleUrls: ['./card-title.component.scss'],
    imports: [IonCardTitle]
})
export class CardTitleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
