import { Component, OnInit } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';
@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
    imports: [IonText]
})
export class TextComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
