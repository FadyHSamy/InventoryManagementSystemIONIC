import { Component, OnInit } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { BaseLayoutComponent } from './core/layout/base-layout/base-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [IonApp, BaseLayoutComponent, ReactiveFormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
