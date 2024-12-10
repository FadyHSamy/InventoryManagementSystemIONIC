import { IonIconsNames } from 'src/app/shared/components/ui/icon/icon.component';

interface SideMenuInterface {
  name: string;
  icon: IonIconsNames;
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
];
