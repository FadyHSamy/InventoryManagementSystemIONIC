import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom, lastValueFrom, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../model/auth/login';
import { environment } from 'src/environments/environment';
import { SideMenuService } from 'src/app/core/layout/side-menu/side-menu.service';
import { ApiGenericService } from '../api-generic/api-generic.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN: string = 'token';

  private currentUserSubject = new BehaviorSubject<
    LoginResponse['user'] | null
  >(null);
  private readonly BASEURL: string = environment.apiUrl + '/Auth';

  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private sideMenuService: SideMenuService,
    private apiGenericService: ApiGenericService
  ) {}

  async login(credentials: LoginRequest) {
    const response = await lastValueFrom(
      this.apiGenericService.post<LoginResponse>(
        `${this.BASEURL}/login`,
        credentials
      )
    );
    console.log(response);
    this.setToken(response.data.token);
    this.setUserInformation(response.data.user);
    this.sideMenuService.navigateToPath('/home');
  }
  logout() {
    this.deleteToken();
    this.setUserInformation(null);
    this.sideMenuService.navigateToPath('/auth/user-login');
  }
  isAuthenticated(): boolean {
    return this.getToken() === null ? false : true;
  }
  getUserInformation() {
    return this.currentUserSubject.value;
  }
  setUserInformation(userInfo: LoginResponse['user'] | null) {
    this.currentUserSubject.next(userInfo);
  }
  getToken() {
    const token = localStorage.getItem(this.TOKEN);
    return token;
  }
  setToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }
  deleteToken() {
    localStorage.removeItem(this.TOKEN);
  }
}
