import { Component, Inject, Input, OnInit } from '@angular/core';
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
import { CoreModule } from './core/core.module';
import { BaseLayoutComponent } from './core/layout/base-layout/base-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  SideMenuInterface,
  SideMenuService,
} from './core/layout/side-menu/side-menu.service';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonButton,
    IonFooter,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonNote,
    IonList,
    IonListHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonSplitPane,
    IonMenu,
    IonMenuToggle,
    IonApp,
    IonRouterOutlet,
    CoreModule,
    BaseLayoutComponent,
    ReactiveFormsModule,
    CommonModule,
    ThemeToggleComponent,
  ],
})
export class AppComponent implements OnInit {
  constructor(private sideMenuService: SideMenuService) {}
  sideMenu: SideMenuInterface[] = [];
  ngOnInit() {
    this.sideMenu = this.sideMenuService.getActiveSideMenu();
  }
}
