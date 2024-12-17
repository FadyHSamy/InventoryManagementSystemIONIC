import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
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
    IonMenuToggle,
    IonButton,
    IonIcon,
    IonTitle,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ menu });
  }

  ngOnInit() {}
  openSideMenu() {}
}
