import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Alert, AlertService } from '../../services/alert/alert.service';
import { ImageButtonComponent } from '../ui/buttons/image-button/image-button.component';
import { IonRow, IonCol } from '@ionic/angular/standalone';
import { ListComponent } from "../ui/list/list.component";
import { ItemComponent } from "../ui/list/item/item.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageButtonComponent,
    IonCol,
    ListComponent,
    ItemComponent
],
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAlerts().subscribe({
      next: (alerts) => {
        if (alerts.length > 0) {
          console.log(alerts);
        }
        this.alerts = alerts;
      },
      error: (err) => {
        console.error('Failed to fetch alerts', err);
      },
    });
  }

  closeAlert(id: string) {
    this.alertService.clearAlert(id);
  }
}
