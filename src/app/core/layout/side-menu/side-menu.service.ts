import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sideMenu } from './menu';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private currentUrl = new BehaviorSubject<string>('');
  // private isMenuShow = new BehaviorSubject<boolean>(false);
  private showLayout = new BehaviorSubject<boolean>(true);
  showLayout$ = this.showLayout.asObservable();
  sideMenu = sideMenu;
  constructor(private router: Router) {}

  getShowInMenuPages() {
    return sideMenu.filter((page) => page.showInMenu === true);
  }
  toggleLayout(show: boolean) {
    this.showLayout.next(show);
  }
  navigateToPath(path: string) {
    this.currentUrl.next(path);
    this.router.navigateByUrl(path);
    const selectedMenu = this.sideMenu.find((menu) => menu.path === path);
    selectedMenu?.showLayout
      ? this.toggleLayout(true)
      : this.toggleLayout(false);
  }
}
