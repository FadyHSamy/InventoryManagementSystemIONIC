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
    this.setType = type;
    this.setMessage = message;

    setTimeout(() => {
      this.clearAlert();
    }, duration);
  }

  clearAlert(): void {
    this.type.next(null);
    this.message.next(null);
  }
  set setType(type: AlertType) {
    this.type.next(type);
  }
  set setMessage(message: string) {
    this.message.next(message);
  }
  get getType() {
    return this.type.value;
  }
  get getMessage() {
    return this.message.value;
  }
}
