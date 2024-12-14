import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { sideMenu } from './menu';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { NavigationService } from 'src/app/api/services/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService implements OnDestroy {
  sideMenu = sideMenu;

  private showLayout = new BehaviorSubject<boolean>(true);
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

    this.navigationService.currentRoute$.subscribe((path) => {
      const selectedMenu = this.sideMenu.find((menu) => menu.path === path);
      this.showLayout.next(!!selectedMenu?.showLayout);
    });
  }

  getShowInMenuPages() {
    return sideMenu.filter((page) => page.showInMenu === true);
  }

  logOut() {
    this.authService.logout();
  }

  // Cleanup resources when the service is destroyed
  ngOnDestroy(): void {
    console.log('SideMenuService destroyed');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
