import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type AlertType = 'Success' | 'Danger' | 'Info' | 'Warning' | 'Dark';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private type = new BehaviorSubject<AlertType | null>(null);
  type$ = this.type.asObservable();

  private message = new BehaviorSubject<string | null>(null);
  message$ = this.message.asObservable();

  constructor() {}

  showAlert(type: AlertType, message: string, duration: number = 5000): void {
    this.type.next(type);
    this.message.next(message);

    setTimeout(() => {
      console.log('aaa');
      this.clearAlert();
    }, duration);
  }

  clearAlert(): void {
    this.type.next(null);
    this.message.next(null);
  }
}
