import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/api/services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(AuthService).getToken();

  let newReq = req;
  if (authToken) {
    newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });
  }
  return next(newReq);
};
