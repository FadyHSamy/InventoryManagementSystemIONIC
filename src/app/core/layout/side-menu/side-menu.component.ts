import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SideMenuService } from './side-menu.service';

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
import { IconComponent } from '../../../shared/components/ui/icon/icon.component';
import { ThemeToggleComponent } from 'src/app/shared/components/ui/theme-toggle/theme-toggle.component';
import { ListComponent } from '../../../shared/components/ui/list/list.component';
import { ItemComponent } from '../../../shared/components/ui/list/item/item.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonList,
    IonContent,
    IonMenu,
    ThemeToggleComponent,
    CommonModule,
    ReactiveFormsModule,
    LabelComponent,
    IconComponent,
    ListComponent,
    ItemComponent,
  ],
})
export class SideMenuComponent implements OnInit {
  constructor(public sideMenuService: SideMenuService) {
    //  addIcons({ pieChart, menu, logOut });
  }

  ngOnInit() {}

  onSelectPage(path: string) {
    this.sideMenuService.navigateToPath(path);
  }
  get sideMenu() {
    return this.sideMenuService.getShowInMenuPages();
  }
}
