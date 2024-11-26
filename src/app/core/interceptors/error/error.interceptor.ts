import {
  HttpErrorResponse,
  HttpEventType,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/api/model/api-response/api-response';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

enum HttpStatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServiceUnavailable = 503,
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const alertService = inject(AlertService);
  return next(req).pipe(
    catchError((error) => {
      let errorMessage = 'An unexpected error has occurred.';
      if (error instanceof HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.error('An error occurred:', error.error.message);
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side error
          switch (error.status) {
            case HttpStatusCode.Unauthorized:
              errorMessage =
                error?.error?.message || `Unauthorized: ${error.statusText}`;
              break;
            case HttpStatusCode.Forbidden:
              errorMessage =
                error?.error?.message || `Forbidden: ${error.statusText}`;
              break;
            case HttpStatusCode.NotFound:
              errorMessage =
                error?.error?.message ||
                `Resource not found: ${error.statusText}`;
              break;
            case HttpStatusCode.ServiceUnavailable:
              errorMessage = `Service unavailable: ${error.statusText}`;
              break;
            default:
              errorMessage = `HTTP error: ${error.status} - ${error.statusText}`;
              break;
          }
        }
      } else {
        console.error(errorMessage);
      }
      alertService.showAlert('Danger', errorMessage);
      return throwError(() => errorMessage);
    })
  );
};
