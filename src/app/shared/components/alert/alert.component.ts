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
  type$: Observable<'Success' | 'Danger' | 'Info' | 'Warning' | 'Dark' | null>;
  message$: Observable<string | null>;

  constructor(private alertService: AlertService) {
    this.type$ = this.alertService.type$;
    this.message$ = this.alertService.message$;
  }

  ngOnInit() {}
}
