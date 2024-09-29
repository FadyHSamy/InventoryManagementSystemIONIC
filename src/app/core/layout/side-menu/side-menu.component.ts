import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonButton,
  IonMenuToggle,
  IonSplitPane,
  IonNote,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pieChart, menu, logOut } from 'ionicons/icons';
import { MenuController } from '@ionic/angular';
import { Routes } from '@angular/router';
import { routes } from 'src/app/app.routes';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    IonRouterOutlet,
    IonLabel,
    IonIcon,
    IonNote,
    IonSplitPane,
    IonButton,
    IonItem,
    IonList,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonMenuToggle,
    CommonModule,
  ],
})
export class SideMenuComponent implements OnInit {
  constructor(private menuController: MenuController) {
    addIcons({ pieChart, menu, logOut });
  }
  routes!:Routes;
  ngOnInit() {
    this.routes = routes
  }
  openSideBarButton() {
    console.log('123');
    this.menuController.enable(true, 'sideMenuId');
  }
}
