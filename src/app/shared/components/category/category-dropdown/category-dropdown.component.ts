import { Component, Input, OnInit } from '@angular/core';
import { SelectComponent } from '../../ui/select/select.component';
import { CategoryService } from 'src/app/api/services/category/category.service';
import { GetCategoriesResponse } from 'src/app/api/model/category/GetCategories';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.scss'],
  imports: [SelectComponent],
})
export class CategoryDropdownComponent implements OnInit {
  @Input({ required: false }) initialValue: string | null = null;
  @Input({ required: false }) disable: boolean = false;
  @Input({ required: false }) formGroup: FormGroup | null = null;
  @Input({ required: false }) controlName: string = ''; // For reactive forms
  constructor(private categoryService: CategoryService) {}

  allCategories!: GetCategoriesResponse['categories'];

  async ngOnInit() {
    this.allCategories = await this.getCategories();
  }

  async getCategories() {
    return (await this.categoryService.getAllCategories()).categories;
  }
}
