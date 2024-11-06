import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sideMenu } from './menu';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private currentUrl = new BehaviorSubject<string>('');
  private isMenuShow = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  getShowInMenuPages() {
    return sideMenu.filter((page) => page.showInMenu === true);
  }
  showSideMenu() {
    this.isMenuShow.next(true);
  }
  hideSideMenu() {
    this.isMenuShow.next(false);
  }
  isMenuShowActive():boolean{
    return this.isMenuShow.value;
  }
  navigateToPath(path: string) {
    this.currentUrl.next(path);
    this.router.navigateByUrl(path);
  }
}
