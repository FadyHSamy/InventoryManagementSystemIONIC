import { Injectable } from '@angular/core';
import { ApiGenericService } from '../api-generic/api-generic.service';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { GetCategoriesResponse } from '../../model/category/GetCategories';
import { HttpParams } from '@angular/common/http';
import { GetCategoryResponse } from '../../model/category/GetCategory';
import { InsertCategoryRequest } from '../../model/category/InsertCategory';
import { ModifyCategoryRequest } from '../../model/category/ModifyCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly BASEURL: string = environment.apiUrl + '/Category';

  constructor(private apiGenericService: ApiGenericService) {}

  async getAllCategories() {
    const response = await lastValueFrom(
      this.apiGenericService.get<GetCategoriesResponse>(
        `${this.BASEURL}/GetAllCategories`
      )
    );
    return response.data;
  }
  async getCategoryById(id: number) {
    const response = await lastValueFrom(
      this.apiGenericService.get<GetCategoryResponse>(
        `${this.BASEURL}/GetCategory`,
        new HttpParams().set('CategoryId', id)
      )
    );
    return response.data;
  }
  async deleteCategory(categoryId: number) {
    const response = await lastValueFrom(
      this.apiGenericService.delete(
        `${this.BASEURL}/DeleteCategory`,
        new HttpParams().set('CategoryId', categoryId)
      )
    );
    return response.data;
  }
  async insertCategory(req: InsertCategoryRequest) {
    const response = await lastValueFrom(
      this.apiGenericService.post(`${this.BASEURL}/InsertCategory`, {
        categoryName: req.categoryName,
        status: req.status,
      })
    );
    return response.data;
  }
  async modifyCategory(req: ModifyCategoryRequest) {
    const response = await lastValueFrom(
      this.apiGenericService.post(`${this.BASEURL}/ModifyCategory`, {
        categoryId: req.categoryId,
        categoryName: req.categoryName,
        status: req.status,
      })
    );
    return response.message;
  }
}
