import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type AlertType = 'Success' | 'Danger' | 'Info' | 'Warning' | 'Dark';

interface Source {
  context: 'Component' | 'Page' | 'Interceptor' | 'Service';
  name: string;
}

export interface Alert {
  id: string;
  message: string;
  type: AlertType;
  source: Source;
  duration?: number;
  httpResponse?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertsSubject = new BehaviorSubject<Alert[]>([]);

  constructor() {}

  showAlert(
    type: AlertType,
    message: string,
    source: Source,
    httpRequest?: unknown,
    duration: number = 5000
  ): void {
    const alert: Alert = {
      id: this.generateId(),
      message: message,
      type: type,
      duration: duration,
      source: source,
      httpResponse: httpRequest,
    };

    const currentAlerts = this.alertsSubject.value;

    this.alertsSubject.next([...currentAlerts, alert]);

    setTimeout(() => {
      this.clearAlert(alert.id);
    }, duration);
  }

  generateId(): string {
    return crypto.randomUUID();
  }

  clearAlert(id: string): void {
    const currentAlerts = this.alertsSubject.value.filter(
      (alert) => alert.id !== id
    );
    this.alertsSubject.next(currentAlerts);
  }

  getAlerts(): Observable<Alert[]> {
    return this.alertsSubject.asObservable();
  }
}
