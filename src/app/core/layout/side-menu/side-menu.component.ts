import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { pieChart, menu, logOut } from 'ionicons/icons';
import { SideMenuInterface } from './side-menu';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [ ],
})
export class SideMenuComponent implements OnInit {
  @Input() pages!: SideMenuInterface[]; // Get pages from parent component (MenuPage)

  constructor() {
    addIcons({ pieChart, menu, logOut });
  }

  ngOnInit() {}

  openSideBarButton() {
    console.log('Sidebar opened');
  }
}
