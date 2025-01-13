import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiGenericService } from '../api-generic/api-generic.service';
import { lastValueFrom } from 'rxjs';
import { GetProductsResponse } from '../../model/product/GetProducts';
import { InsertProductRequest } from '../../model/product/InsertProduct';
import { HttpParams } from '@angular/common/http';
import { GetProductResponse } from '../../model/product/GetProduct';
import { ModifyProductRequest } from '../../model/product/ModifyProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly BASEURL: string = environment.apiUrl + '/Product';

  constructor(private apiGenericService: ApiGenericService) {}

  async getAllProducts() {
    const response = await lastValueFrom(
      this.apiGenericService.get<GetProductsResponse>(
        `${this.BASEURL}/GetProducts`
      )
    );
    return response.data;
  }

  async getProductById(id: number) {
    const response = await lastValueFrom(
      this.apiGenericService.get<GetProductResponse>(
        `${this.BASEURL}/GetProduct`,
        new HttpParams().set('ProductId', id)
      )
    );
    return response.data;
  }

  async insertProduct(req: InsertProductRequest) {
    const response = await lastValueFrom(
      this.apiGenericService.post(`${this.BASEURL}/InsertProduct`, {
        productName: req.productName,
        productDescription: req.productDescription,
        productPrice: req.productPrice,
        categoryId: req.categoryId,
        StockQuantity: req.stockQuantity,
      })
    );
    return response.data;
  }

  async deleteProduct(productId: number) {
    const response = await lastValueFrom(
      this.apiGenericService.delete(
        `${this.BASEURL}/DeleteProduct`,
        new HttpParams().set('ProductId', productId)
      )
    );
    return response.data;
  }

  async modifyProduct(req: ModifyProductRequest) {
    const response = await lastValueFrom(
      this.apiGenericService.post(`${this.BASEURL}/ModifyProduct`, {
        productId: req.productId,
        productName: req.productName,
        productDescription: req.productDescription,
        productPrice: req.productPrice,
        categoryId: req.categoryId,
        stockQuantity: req.stockQuantity,
      })
    );
    return response.message;
  }
}
