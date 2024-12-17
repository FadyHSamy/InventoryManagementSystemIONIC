import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { sideMenu } from './menu';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { NavigationService } from 'src/app/api/services/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService implements OnInit, OnDestroy {
  sideMenu = sideMenu;

  private showLayout = new BehaviorSubject<boolean>(false);
  showLayout$ = this.showLayout.asObservable();

  // Subject to signal destruction
  private destroy$ = new Subject<void>();

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) {
    this.navigationService.currentRoute$
      .pipe(takeUntil(this.destroy$))
      .subscribe((path) => {
        const selectedMenu = this.sideMenu.find((menu) => menu.path === path);
        this.showLayout.next(!!selectedMenu?.showLayout);
      });
  }
  ngOnInit(): void {}

  getShowInMenuPages() {
    return sideMenu.filter((page) => page.showInMenu === true);
  }

  logOut() {
    this.authService.logout();
  }

  // Cleanup resources when the service is destroyed
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
