import { IonIconProp } from 'src/app/shared/components/ui/icon/icon.component';

interface SideMenuInterface {
  name: string;
  icon: IonIconProp['name'];
  path: string;
  showInMenu: boolean;
  showLayout: boolean;
}

export const sideMenu: SideMenuInterface[] = [
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
