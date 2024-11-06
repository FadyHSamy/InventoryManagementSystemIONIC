import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

interface CredentialsLogin {
  username: string;
  password: string;
}
type AuthState = {
  user: any | null;
  token: string | null;
  is_auth: boolean;
  loading: boolean;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router, private httpClient: HttpClient) {}

  login(credentials: CredentialsLogin) {
    return this.httpClient.post<any>('/api/login', credentials).pipe(
      tap((user) => {
        // Store user data and token
        localStorage.setItem('token', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
  isAuthenticated(): boolean {
    return this.currentUserValue !== null;
  }
  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
}
