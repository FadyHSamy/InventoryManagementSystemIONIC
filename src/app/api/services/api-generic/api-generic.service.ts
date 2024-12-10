import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../model/api-response/api-response';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGenericService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, httpParam?: HttpParams) {
    return this.http
      .get<ApiResponse<T>>(url, { params: httpParam })
      .pipe((res) => res);
  }

  post<T>(url: string, body: any, httpParam?: HttpParams) {
    return this.http.post<ApiResponse<T>>(url, body, { params: httpParam });
  }

  put<T>(url: string, body: T, httpParam?: HttpParams) {
    return this.http.put<ApiResponse<T>>(url, body, { params: httpParam });
  }

  delete<T>(url: string, httpParam?: HttpParams) {
    return this.http.delete<ApiResponse<T>>(url, { params: httpParam });
  }
}
