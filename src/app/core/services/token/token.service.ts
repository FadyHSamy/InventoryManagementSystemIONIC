import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private TOKEN_KEY = 'access_token';
  private REFRESH_TOKEN_KEY = 'refresh_token';

  constructor() {}

  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setAccessToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  removeAccessToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
