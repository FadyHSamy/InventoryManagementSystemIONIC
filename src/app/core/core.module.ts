import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AuthService } from './services/auth.service';
// import { LoggingService } from './services/logging.service';
// import { ExceptionService } from './services/exception.service';

// import { AuthInterceptor } from './interceptors/auth.interceptor';
// import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,  // Import common Angular modules if needed
  ],
  providers: [
    // AuthService,
    // LoggingService,
    // ExceptionService,
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,  // Allows multiple interceptors to be chained
    // },
  ],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
