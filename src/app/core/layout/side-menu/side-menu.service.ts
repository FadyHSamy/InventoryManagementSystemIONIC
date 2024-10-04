import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { logIn, create, home, menu, personAdd } from 'ionicons/icons';

export interface SideMenuInterface {
  name: string;
  icon: string;
  path: string;
  showInMenu: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  constructor() {
    addIcons({ logIn, create, home, menu, personAdd });
  }
  private sideMenu: SideMenuInterface[] = [
    {
      name: 'User Register',
      icon: 'person-add',
      path: 'auth/user-register',
      showInMenu: true,
    },
  ];

  getActiveSideMenu() {
    return this.sideMenu.filter((page) => page.showInMenu === true);
  }
}
