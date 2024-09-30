import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { logIn, create, home,menu } from 'ionicons/icons';

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
    addIcons({ logIn, create, home ,menu  });
  }
  private sideMenu: SideMenuInterface[] = [
    {
      name: 'Login',
      icon: 'log-in',
      path: '/menu/login',
      showInMenu: true,
    },
    {
      name: 'Register',
      icon: 'create',
      path: '/menu/register',
      showInMenu: true,
    },
  ];

  getActiveSideMenu() {
    return this.sideMenu.filter((page) => page.showInMenu === true);
  }
}
