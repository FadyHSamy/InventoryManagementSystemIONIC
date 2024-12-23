import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiGenericService } from '../api-generic/api-generic.service';
import { lastValueFrom } from 'rxjs';
import { GetProductsResponse } from '../../model/product/GetProducts';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private readonly BASEURL: string = environment.apiUrl + '/Product';


  constructor(private apiGenericService: ApiGenericService) { }

async getAllProducts() {
    const response = await lastValueFrom(
      this.apiGenericService.get<GetProductsResponse>(
        `${this.BASEURL}/GetProducts`
      )
    );
    return response.data;
  }


}
