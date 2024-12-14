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
    imports: [
        IonCol,
        IonRow,
        IonGrid,
        IonHeader,
        IonTitle,
        IonMenuToggle,
        IonButton,
        IonIcon,
    ]
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ menu });
  }

  ngOnInit() {}
  openSideMenu() {}
}
