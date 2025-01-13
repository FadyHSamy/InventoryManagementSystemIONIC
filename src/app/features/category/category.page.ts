import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { TextHeaderComponent } from '../../shared/components/ui/text-header/text-header.component';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { CardContentComponent } from '../../shared/components/ui/card/card-content/card-content.component';
import { SearchbarComponent } from '../../shared/components/ui/searchbar/searchbar.component';
import { ButtonComponent } from '../../shared/components/ui/buttons/button/button.component';
import {
  Column,
  GridComponent,
} from 'src/app/shared/components/ui/grid/grid.component';
import { CategoryService } from 'src/app/api/services/category/category.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { ModalComponent } from '../../shared/components/ui/modal/modal.component';
import { ModalHeaderComponent } from '../../shared/components/ui/modal/modal-header/modal-header.component';
import { FontAwesomeIconComponent } from '../../shared/components/ui/font-awesome-icon/font-awesome-icon.component';
import { ModalBodyComponent } from '../../shared/components/ui/modal/modal-body/modal-body.component';
import { InputComponent } from '../../shared/components/ui/input/input.component';
import { InsertCategoryRequest } from 'src/app/api/model/category/InsertCategory';
import { ModifyCategoryRequest } from 'src/app/api/model/category/ModifyCategory';
import { CheckboxComponent } from '../../shared/components/ui/checkbox/checkbox.component';

interface CategoryModal {
  visible: boolean;
  edit: boolean;
}
interface Category {
  categoryId: number;
  categoryName: string;
  status: boolean;
}
interface CategoryGrid<T> {
  columns: Column[];
  categories: T[];
  filterColumn: string;
  filterText: string;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonContent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TextHeaderComponent,
    CardComponent,
    CardContentComponent,
    SearchbarComponent,
    ButtonComponent,
    GridComponent,
    ModalComponent,
    ModalHeaderComponent,
    FontAwesomeIconComponent,
    ModalBodyComponent,
    InputComponent,
    CheckboxComponent,
  ],
})
export class CategoryPage implements OnInit {
  categoryForm!: FormGroup;
  categoryModal!: CategoryModal;
  categoryGrid!: CategoryGrid<Category>;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private alertService: AlertService
  ) {}

  async ngOnInit() {
    this.initializeState();
    this.categoryForm = this.createForm();
    const categories = (await this.categoryService.getAllCategories())
      .categories;

    this.categoryGrid = {
      columns: [
        { field: 'categoryId', header: 'Id' },
        { field: 'categoryName', header: 'Name' },
        { field: 'status', header: 'Active' },
      ],
      categories: categories.map((category) => ({
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        status: category.status === 1 ? true : false,
      })),
      filterColumn: '',
      filterText: '',
    };
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(5)]],
      status: [false],
    });
  }

  initializeState() {
    this.categoryGrid = {
      columns: [],
      categories: [],
      filterColumn: '',
      filterText: '',
    };
    this.categoryModal = {
      visible: false,
      edit: false,
    };
  }

  searchResult(value: string) {
    console.log('searchResult ~ value:', value);
    this.categoryGrid.filterColumn = 'categoryName';
    this.categoryGrid.filterText = value;
  }

  newCategoryButtonClick() {
    this.openModal(false);
  }

  async addCategory() {
    if (!this.categoryForm.valid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    const categoryRequest: InsertCategoryRequest = {
      categoryName: this.categoryForm.get('name')?.value,
      status: this.categoryForm.get('status')?.value ? 1 : 0,
    };
    try {
      await this.categoryService.insertCategory(categoryRequest);
      this.alertService.showAlert('Success', 'Category added successfully', {
        context: 'Page',
        name: 'CategoryManagementPage:addCategory',
      });
      window.location.reload();
    } catch (error) {}
  }

  async editCategoryButtonClick(categoryRow: Category) {
    try {
      const categoryInfo = (
        await this.categoryService.getCategoryById(categoryRow.categoryId)
      ).category;

      this.categoryForm.patchValue({
        id: categoryInfo.categoryId,
        name: categoryInfo.categoryName,
        status: categoryInfo.status === 1 ? true : false,
      });

      this.openModal(true);
    } catch (error) {}
  }

  async editCategory() {
    if (!this.categoryForm.valid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    const categoryRequest: ModifyCategoryRequest = {
      categoryId: this.categoryForm.get('id')?.value,
      categoryName: this.categoryForm.get('name')?.value,
      status: this.categoryForm.get('status')?.value ? 1 : 0,
    };

    try {
      const response = await this.categoryService.modifyCategory(
        categoryRequest
      );
      this.alertService.showAlert('Success', response, {
        context: 'Page',
        name: 'CategoryManagementPage:addCategory',
      });
      window.location.reload();
    } catch (error) {}
  }

  async deleteCategory(categoryRow: Category) {
    try {
      await this.categoryService.deleteCategory(categoryRow.categoryId);
      this.alertService.showAlert('Success', 'Category deleted successfully', {
        context: 'Page',
        name: 'CategoryManagementPage:deleteCategory',
      });
      window.location.reload();
    } catch (error) {}
  }

  openModal(edit: boolean) {
    this.categoryModal = {
      visible: true,
      edit: edit,
    };
  }

  closeModal() {
    this.categoryModal = {
      visible: false,
      edit: false,
    };
    this.categoryForm.reset();
  }
}
