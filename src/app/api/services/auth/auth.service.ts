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
  private currentUserSubject = new BehaviorSubject<
    LoginResponse['user'] | null
  >(null);
  private readonly BASEURL: string = environment.apiUrl + '/Auth';

  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
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
    this.setToken(response.data.token);
    this.currentUserSubject.next(response.data.user);
    this.sideMenuService.navigateToPath('/home')
  }
  logout() {
    this.deleteToken();
    this.currentUserSubject.next(null);
    this.sideMenuService.navigateToPath('/auth/user-login')
  }
  isAuthenticated(): boolean {
    return this.getToken() === null ? false : true;
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
}
