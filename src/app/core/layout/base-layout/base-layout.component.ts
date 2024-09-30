import { Component, OnInit } from '@angular/core';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonFooter,
  IonContent,
  IonMenuToggle,
  IonMenu,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonSplitPane,
} from '@ionic/angular/standalone';
import { Routes } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule],
})
export class BaseLayoutComponent implements OnInit {
  constructor() {}
  routes!: Routes;
  ngOnInit() {
    this.routes = routes;
  }
}
