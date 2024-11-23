import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { LoaderService } from '../../services/loader/loader.service';
import { LoadingController } from '@ionic/angular';
import { catchError, finalize, Observable } from 'rxjs';
import { Injector } from '@angular/core';

export const httpLoaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingCtrl = new LoadingController();
  const loadingService = new LoaderService(loadingCtrl);
  loadingService.presentLoading();

  return next(req).pipe(
    finalize(() => {
      loadingService.dismissLoading();
    }),
    catchError((error) => {
      console.error('Request failed:', error);
      loadingService.dismissLoading();
      throw error;
    })
  );
};
