import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private apiService: ApiHandlerService) {}
  get(endpoint: string) {
    return this.apiService.Get(`${environment.apiUrl}` + endpoint);
  }

  post(endpoint: string, body?: any) {
    return this.apiService.Post(`${environment.apiUrl}` + endpoint, body);
  }

  put(endpoint: string, body?: any) {
    return this.apiService.Put(`${environment.apiUrl}` + endpoint, body);
  }

  delete(endpoint: string) {
    return this.apiService.Delete(`${environment.apiUrl}` + endpoint, null);
  }
}
