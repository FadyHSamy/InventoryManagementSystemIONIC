import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert/alert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AlertComponent implements OnInit {

  constructor(private alertService: AlertService) {

  }

  ngOnInit() {}
  closeAlert() {
    this.alertService.clearAlert();
  }
  get type() {
    return this.alertService.getType;
  }
  get message() {
    return this.alertService.getMessage;
  }
}
