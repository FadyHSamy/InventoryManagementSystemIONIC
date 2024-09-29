import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
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
  IonItem, IonSplitPane } from '@ionic/angular/standalone';
import { Routes } from '@angular/router';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  standalone: true,
  imports: [IonSplitPane,
    IonItem,
    IonList,
    IonIcon,
    IonContent,
    IonFooter,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonApp,
    IonMenuToggle,
    IonButton,
    SharedModule,
    IonMenu,
  ],
})
export class BaseLayoutComponent implements OnInit {
  constructor() {}
  routes!: Routes;
  ngOnInit() {
    this.routes = routes;
  }
}
