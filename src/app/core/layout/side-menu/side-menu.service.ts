import { Injectable } from '@angular/core';
import { IonIcons } from 'src/app/shared/components/icon/icon.component';

export interface SideMenuInterface {
  name: string;
  icon: IonIcons;
  path: string;
  showInMenu: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  constructor() {}
  private sideMenu: SideMenuInterface[] = [
    {
      name: 'Home',
      icon: 'home',
      path: '/home',
      showInMenu: true,
    },
    {
      name: 'User Register',
      icon: 'person',
      path: '/auth/user-register',
      showInMenu: true,
    },
  ];

  getActiveSideMenu() {
    return this.sideMenu.filter((page) => page.showInMenu === true);
  }
}
