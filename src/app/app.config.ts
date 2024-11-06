import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { routes } from './app.routes';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([])),

    provideRouter(routes),

    provideIonicAngular({
      innerHTMLTemplatesEnabled: true,
    }),
    provideAnimations(),
    importProvidersFrom(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
};
