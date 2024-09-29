import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BaseLayoutComponent } from "./core/layout/base-layout/base-layout.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CoreModule, SharedModule, BaseLayoutComponent],
})
export class AppComponent {
  constructor() {}
}
