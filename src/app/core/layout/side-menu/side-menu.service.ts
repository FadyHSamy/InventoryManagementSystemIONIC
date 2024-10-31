import { Injectable } from '@angular/core';
import { IonIcons } from 'src/app/shared/components/ui/icon/icon.component';

export interface SideMenuInterface {
  name: string;
  icon: IonIcons;
  path: string;
  showInMenu: boolean;
  showLayout: boolean;
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
      showLayout: true,
    },
    {
      name: 'User Register',
      icon: 'person',
      path: '/auth/user-register',
      showInMenu: true,
      showLayout: false,
    },
  ];

  getActiveSideMenu() {
    return this.sideMenu.filter((page) => page.showInMenu === true);
  }
  shouldShowLayout(path: string): boolean {
    const page = this.sideMenu.find((menu) => menu.path === path);
    return page ? page.showLayout : false;
  }
}
