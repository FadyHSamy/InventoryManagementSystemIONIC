import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, from, switchMap, throwError } from 'rxjs';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { TokenService } from '../../services/token/token.service';

enum HttpStatusCode {
  NoResponse = 0,
  OK = 200,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  ServiceUnavailable = 503,
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const alertService = inject(AlertService);
  return next(req).pipe(
    catchError((error) =>
      handleHttpError(req, next, error, authService, tokenService, alertService)
    )
  );
};

function handleHttpError(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  error: any,
  authService: AuthService,
  tokenService: TokenService,
  alertService: AlertService
) {
  if (!(error instanceof HttpErrorResponse)) {
    // Handle non-HTTP errors
    return handleGenericError(error, alertService);
  }
  switch (error.status) {
    case HttpStatusCode.Unauthorized: {
      return handleUnauthorizedError(
        req,
        next,
        authService,
        tokenService,
        alertService
      );
    }
    case HttpStatusCode.NoResponse: {
      return handleNoResponseError(authService, alertService);
    }

    default: {
      return handleUnhandledHttpError(error, alertService);
    }
  }
}

function handleUnauthorizedError(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  tokenService: TokenService,
  alertService: AlertService
) {
  return from(authService.refreshToken()).pipe(
    switchMap(() => {
      const newToken = tokenService.getAccessToken();
      if (newToken) {
        const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${newToken}`),
        });
        return next(clonedRequest);
      } else {
        authService.logout();
        alertService.showAlert('Warning', 'Session expired.', {
          context: 'Interceptor',
          name: 'errorInterceptor',
        });
        return throwError(() => new Error('Session expired'));
      }
    }),
    catchError((refreshError) => {
      authService.logout();
      alertService.showAlert(
        'Warning',
        'Session expired. Please log in again.',
        {
          context: 'Interceptor',
          name: 'errorInterceptor',
        }
      );
      return throwError(() => new Error(refreshError || 'Session expired'));
    })
  );
}

function handleNoResponseError(
  authService: AuthService,
  alertService: AlertService
) {
  alertService.showAlert('Danger', 'No response from the server.', {
    context: 'Interceptor',
    name: 'errorInterceptor',
  });
  authService.logout();
  return throwError(() => new Error('No response from the server.'));
}

function handleUnhandledHttpError(
  error: HttpErrorResponse,
  alertService: AlertService
) {
  const errorMessage =
    error.error?.message || `HTTP Error: ${error.status} - ${error.statusText}`;
  console.log('errorMessage', errorMessage);
  alertService.showAlert('Danger', errorMessage, {
    context: 'Interceptor',
    name: 'errorInterceptor',
  });
  return throwError(() => new Error(errorMessage));
}

function handleGenericError(error: any, alertService: AlertService) {
  alertService.showAlert(
    'Danger',
    'An unexpected error occurred. Please try again later.',
    {
      context: 'Interceptor',
      name: 'errorInterceptor',
    }
  );
  return throwError(() => error);
}
