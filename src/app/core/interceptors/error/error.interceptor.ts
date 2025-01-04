import {
  HttpErrorResponse,
  HttpEventType,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import {
  catchError,
  finalize,
  from,
  lastValueFrom,
  mergeMap,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { ApiResponse } from 'src/app/api/model/api-response/api-response';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import {
  AlertService,
  AlertType,
} from 'src/app/shared/services/alert/alert.service';
import { TokenService } from '../../services/token/token.service';

enum HttpStatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServiceUnavailable = 503,
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const alertService = inject(AlertService);

  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === HttpStatusCode.Unauthorized) {
          // Attempt to refresh the token
          return from(authService.refreshToken()).pipe(
            switchMap(() => {
              const newToken = tokenService.getAccessToken();
              console.log(newToken)
              if (newToken) {
                // Clone and retry the original request with the new token
                console.log(newToken)
                const modifiedReq = req.clone({
                  headers: req.headers.set(
                    'Authorization',
                    `Bearer ${newToken}`
                  ),
                });
                return next(modifiedReq);
              } else {
                // If token refresh fails, log out the user
                authService.logout();
                alertService.showAlert('Warning', 'Session expired.');
                return throwError(() => new Error('Session expired'));
              }
            }),
            catchError(() => {
              // Handle errors during the token refresh process
              authService.logout();
              alertService.showAlert(
                'Warning',
                'Session expired. Please log in again.'
              );
              return throwError(() => new Error('Session expired'));
            })
          );
        }

        // Handle other HTTP errors
        const errorMessage =
          error.error?.message ||
          `HTTP Error: ${error.status} - ${error.statusText}`;
        alertService.showAlert('Danger', errorMessage);
      } else {
        // Handle non-HTTP errors
        console.error('Unexpected error:', error);
        alertService.showAlert('Danger', 'An unexpected error occurred.');
      }

      return throwError(() => error);
    })
  );
};
