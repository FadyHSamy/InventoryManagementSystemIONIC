import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonLabel } from '@ionic/angular/standalone';
import { CoreModule } from './core/core.module';
import { BaseLayoutComponent } from './core/layout/base-layout/base-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonLabel,
    IonApp,
    IonRouterOutlet,
    CoreModule,
    BaseLayoutComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
