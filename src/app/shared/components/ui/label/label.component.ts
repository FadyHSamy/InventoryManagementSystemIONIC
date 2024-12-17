import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    imports: [IonContent]
})
export class LabelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
