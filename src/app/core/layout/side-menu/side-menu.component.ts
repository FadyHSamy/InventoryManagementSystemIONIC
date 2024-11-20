import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { pieChart, menu, logOut } from 'ionicons/icons';
import { SideMenuService } from './side-menu.service';
import { Router, RouterLinkWithHref } from '@angular/router';

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
import { ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../../../shared/components/ui/label/label.component';
import {
  IconComponent,
} from '../../../shared/components/ui/icon/icon.component';
import { ThemeToggleComponent } from 'src/app/shared/components/ui/theme-toggle/theme-toggle.component';

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
    IconComponent,
  ],
})
export class SideMenuComponent implements OnInit {
  constructor(public sideMenuService: SideMenuService) {
    addIcons({ pieChart, menu, logOut });
  }

  ngOnInit() {}

  onSelectPage(path: string) {
    this.sideMenuService.navigateToPath(path);
  }
  get sideMenu() {
    return this.sideMenuService.getShowInMenuPages();
  }
}
