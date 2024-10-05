import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { pieChart, menu, logOut } from 'ionicons/icons';
import { SideMenuInterface, SideMenuService } from './side-menu.service';
import { RouterLinkWithHref } from '@angular/router';

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonLabel,
  IonItem,
  IonIcon,
  IonListHeader,
  IonList,
  IonNote,
  IonContent,
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from "../../../shared/components/label/label.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonLabel,
    IonItem,
    IonIcon,
    IonListHeader,
    IonList,
    IonNote,
    IonContent,
    IonMenu,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    ThemeToggleComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLinkWithHref,
    LabelComponent,
    IconComponent
],
})
export class SideMenuComponent implements OnInit {
  constructor() {
    addIcons({ pieChart, menu, logOut });
  }

  sideMenuService: SideMenuService = inject(SideMenuService);

  sideMenu: SideMenuInterface[] = [];

  ngOnInit() {
    this.sideMenu = this.sideMenuService.getActiveSideMenu();
  }
}
