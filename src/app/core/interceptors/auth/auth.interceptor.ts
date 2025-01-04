import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../../services/token/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService).getAccessToken();

  let modifiedReq = req;
  if (token) {
    modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }
  return next(modifiedReq);
};
