import { Component, inject, OnInit } from '@angular/core';
import {
  IonRouterOutlet,
  IonContent,
  IonLabel,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    imports: [
        IonRouterOutlet,
        IonContent,
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
