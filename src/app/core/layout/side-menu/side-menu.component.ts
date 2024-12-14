import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { IonMenu } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../../../shared/components/ui/label/label.component';
import { IconComponent } from '../../../shared/components/ui/icon/icon.component';
import { ThemeToggleComponent } from 'src/app/shared/components/ui/theme-toggle/theme-toggle.component';
import { ListComponent } from '../../../shared/components/ui/list/list.component';
import { ItemComponent } from '../../../shared/components/ui/list/item/item.component';
import { FontAwesomeIconComponent } from '../../../shared/components/ui/font-awesome-icon/font-awesome-icon.component';
import { NavigationService } from 'src/app/api/services/navigation.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    IonMenu,
    ThemeToggleComponent,
    CommonModule,
    ReactiveFormsModule,
    LabelComponent,
    IconComponent,
    ListComponent,
    ItemComponent,
    FontAwesomeIconComponent,
  ],
})
export class SideMenuComponent implements OnInit {
  constructor(
    private sideMenuService: SideMenuService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {}

  onSelectPage(path: string) {
    this.navigationService.navigateToPath(path);
  }
  get sideMenu() {
    return this.sideMenuService.getShowInMenuPages();
  }
  logOutButton() {
    this.sideMenuService.logOut();
  }
}
