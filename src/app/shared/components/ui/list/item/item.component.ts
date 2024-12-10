import { Component, OnInit } from '@angular/core';
import { IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [IonItem, ],
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
