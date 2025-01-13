import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../model/auth/login';
import { environment } from 'src/environments/environment';
import { ApiGenericService } from '../api-generic/api-generic.service';
import { NavigationService } from '../../../core/services/navigation/navigation.service';
import { TokenService } from 'src/app/core/services/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<
    LoginResponse['user'] | null
  >(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private readonly BASEURL = `${environment.apiUrl}/Auth`;

  constructor(
    private navigationService: NavigationService,
    private apiGenericService: ApiGenericService,
    private tokenService: TokenService
  ) {}

  async login(credentials: LoginRequest): Promise<void> {
    try {
      const response = await lastValueFrom(
        this.apiGenericService.post<LoginResponse>(
          `${this.BASEURL}/login`,
          credentials
        )
      );
      this.tokenService.setAccessToken(response.data.token);
      this.tokenService.setRefreshToken(response.data.refreshToken);
      this.currentUserSubject.next(response.data.user);

      this.navigationService.navigateToPath('/dashboard');
    } catch (error) {}
  }
  logout(): void {
    this.tokenService.removeAccessToken();
    this.tokenService.removeRefreshToken();
    this.currentUserSubject.next(null);
    this.navigationService.navigateToPath('/auth/user-login');
  }
  isAuthenticated(): boolean {
    return !!this.tokenService.getAccessToken();
  }
  getCurrentUser(): LoginResponse['user'] | null {
    return this.currentUserSubject.value;
  }
  async refreshToken(): Promise<void> {
    const token = this.tokenService.getAccessToken();
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      this.logout();
      return;
    }

    const response = await lastValueFrom(
      this.apiGenericService.post<{ token: string; refreshToken: string }>(
        `${this.BASEURL}/RefreshToken`,
        {
          token: token,
          refreshToken: refreshToken,
        }
      )
    );
    this.tokenService.setAccessToken(response.data.token);
    this.tokenService.setRefreshToken(response.data.refreshToken);
  }
}
