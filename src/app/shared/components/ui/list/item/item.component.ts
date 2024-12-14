import { Component, Input, OnInit } from '@angular/core';
import { IonItem } from "@ionic/angular/standalone";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    imports: [IonItem,]
})
export class ItemComponent implements OnInit {
  @Input({required:false}) button:boolean = false;
  constructor() {}

  ngOnInit() {}
}
