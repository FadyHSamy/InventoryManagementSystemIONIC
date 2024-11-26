import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../../services/loader/loader.service';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs';

export const httpLoaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingCtrl = new LoadingController();
  const loadingService = new LoaderService(loadingCtrl);
  loadingService.presentLoading();

  return next(req).pipe(
    finalize(() => {
      loadingService.dismissLoading();
    })
  );
};
