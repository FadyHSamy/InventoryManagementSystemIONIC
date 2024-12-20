import { IonIconsNames } from 'src/app/shared/components/ui/icon/icon.component';
import * as icons from '@fortawesome/free-solid-svg-icons';

interface SideMenuInterface {
  name: string;
  icon?: IonIconsNames;
  fontAwesome?: keyof typeof icons;
  path: string;
  showInMenu: boolean;
  showLayout: boolean;
}

export const sideMenu: SideMenuInterface[] = [
  {
    name: 'Dashboard',
    fontAwesome: 'faTableColumns',
    path: '/dashboard',
    showInMenu: true,
    showLayout: true,
  },
  {
    name: 'Products',
    fontAwesome: 'faBox',
    path: '/product-management',
    showInMenu: true,
    showLayout: true,
  },
  {
    name: 'Sales',
    fontAwesome: 'faCube',
    path: '/sales',
    showInMenu: true,
    showLayout: true,
  },
  {
    name: 'Orders',
    fontAwesome: 'faHistory',
    path: '/orders',
    showInMenu: true,
    showLayout: true,
  },
  {
    name: 'Suppliers',
    fontAwesome: 'faTruckField',
    path: '/suppliers',
    showInMenu: true,
    showLayout: true,
  },
];
