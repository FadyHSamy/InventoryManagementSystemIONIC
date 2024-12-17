import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LabelComponent } from '../../shared/components/ui/label/label.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, LabelComponent],
})
export class DashboardPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
