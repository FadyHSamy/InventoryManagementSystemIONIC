import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private currentRouteSubject = new BehaviorSubject<string | null>(null);
  currentRoute$ = this.currentRouteSubject.asObservable();

  readonly DEFAULT_AUTHENTICATED_ROUTE = 'dashboard';
  readonly LOGIN_ROUTE = 'auth/user-login';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRouteSubject.next(event.urlAfterRedirects);
      });
  }

  navigateBasedOnAuthStatus(isAuthenticated: boolean): void {
    const targetPath = isAuthenticated
      ? this.DEFAULT_AUTHENTICATED_ROUTE
      : this.LOGIN_ROUTE;
    this.navigateToPath(targetPath);
  }

  navigateToPath(path: string): void {
    this.currentRouteSubject.next(path);
    this.router.navigateByUrl(path);
  }
}
