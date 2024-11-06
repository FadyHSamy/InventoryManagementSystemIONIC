import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SideMenuComponent,
    HeaderComponent,
    ContentComponent,
  ],
})
export class BaseLayoutComponent implements OnInit {
  constructor(public sideMenuService: SideMenuService) {}

  ngOnInit() {}
}
