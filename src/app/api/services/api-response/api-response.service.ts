import { Injectable } from '@angular/core';
import { ApiResponse } from '../../model/api-response/api-response';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class ApiResponseService {
  constructor(private alertService: AlertService) {}

  handleResponse<T>(response: ApiResponse<T>): T | null {
    if (response.isSuccess) {
      return response.data; // Return the data on success
    } else {
      console.error(
        `API Error [${response.requestApiUrl}]: ${response.message}`
      );
      return null; // Return null or handle as needed
    }
  }
}
