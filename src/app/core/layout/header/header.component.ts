import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { addIcons } from 'ionicons';
import { menu } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuToggle,
    IonButton,
    IonIcon,
    SideMenuComponent,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ menu });
  }

  ngOnInit() {}
  openSideMenu() {}
}
