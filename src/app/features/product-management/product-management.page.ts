import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextHeaderComponent } from '../../shared/components/ui/text-header/text-header.component';
import {
  Column,
  GridComponent,
} from '../../shared/components/ui/grid/grid.component';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { CardContentComponent } from '../../shared/components/ui/card/card-content/card-content.component';
import { ButtonComponent } from '../../shared/components/ui/buttons/button/button.component';
import { SearchbarComponent } from '../../shared/components/ui/searchbar/searchbar.component';
import { ProductService } from 'src/app/api/services/product/product.service';
import { ModalComponent } from '../../shared/components/ui/modal/modal.component';
import { ModalHeaderComponent } from '../../shared/components/ui/modal/modal-header/modal-header.component';
import { ModalBodyComponent } from '../../shared/components/ui/modal/modal-body/modal-body.component';
import { FontAwesomeIconComponent } from '../../shared/components/ui/font-awesome-icon/font-awesome-icon.component';
import { InputComponent } from '../../shared/components/ui/input/input.component';
import { TextAreaComponent } from '../../shared/components/ui/text-area/text-area.component';
import { CategoryDropdownComponent } from '../../shared/components/category/category-dropdown/category-dropdown.component';
import { InsertProductRequest } from 'src/app/api/model/product/InsertProduct';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { ImageButtonComponent } from '../../shared/components/ui/buttons/image-button/image-button.component';
import { ModifyProductRequest } from 'src/app/api/model/product/ModifyProduct';

interface ProductGrid<T> {
  columns: Column[];
  products: T[];
  filterColumn: string;
  filterText: string;
}
interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  categoryName: string;
  productPrice: number;
}
interface ProductModal {
  visible: boolean;
  edit: boolean;
}

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.page.html',
  styleUrls: ['./product-management.page.scss'],
  imports: [
    IonRow,
    IonContent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TextHeaderComponent,
    GridComponent,
    CardComponent,
    CardContentComponent,
    ButtonComponent,
    IonCol,
    SearchbarComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    FontAwesomeIconComponent,
    InputComponent,
    TextAreaComponent,
    CategoryDropdownComponent,
  ],
})
export class ProductManagementPage implements OnInit {
  productForm!: FormGroup;
  productGrid!: ProductGrid<Product>;
  productModal!: ProductModal;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {}

  async ngOnInit() {
    this.initializeState();
    this.productForm = this.createForm();
    const products = (await this.productService.getAllProducts()).product;

    this.productGrid = {
      columns: [
        { field: 'productId', header: 'Id', hide: true },
        { field: 'productName', header: 'Name' },
        { field: 'productDescription', header: 'Description' },
        { field: 'categoryName', header: 'Category' },
        { field: 'productPrice', header: 'Price' },
      ],
      products: products.map((product) => ({
        productId: product.productId,
        productName: product.productName,
        productDescription: product.productDescription,
        categoryName: product.categoryName,
        productPrice: product.productPrice,
      })),
      filterColumn: '',
      filterText: '',
    };
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(5)]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', Validators.required],
      description: [null],
    });
  }

  initializeState() {
    this.productGrid = {
      columns: [],
      products: [],
      filterColumn: '',
      filterText: '',
    };
    this.productModal = {
      visible: false,
      edit: false,
    };
  }

  searchResult(value: string) {
    console.log('searchResult ~ value:', value);
    this.productGrid.filterColumn = 'productName';
    this.productGrid.filterText = value;
  }

  newProductButtonClick() {
    this.openModal(false);
  }

  async addProduct() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const productRequest: InsertProductRequest = {
      productName: this.productForm.get('name')?.value,
      productDescription: this.productForm.get('description')?.value,
      productPrice: this.productForm.get('price')?.value,
      categoryId: this.productForm.get('category')?.value,
      stockQuantity: this.productForm.get('quantity')?.value,
    };
    try {
      await this.productService.insertProduct(productRequest);
      this.alertService.showAlert('Success', 'Product added successfully', {
        context: 'Page',
        name: 'ProductManagementPage:addProduct',
      });
      window.location.reload();
    } catch (error) {}
  }

  async editProductButtonClick(productRow: Product) {
    try {
      const productInfo = (
        await this.productService.getProductById(productRow.productId)
      ).product;

      this.productForm.patchValue({
        id: productInfo.productId,
        name: productInfo.productName,
        quantity: productInfo.stockQuantity,
        price: productInfo.productPrice,
        category: productInfo.categoryId,
        description: productInfo.productDescription,
      });

      this.openModal(true);
    } catch (error) {}
  }

  async editProduct() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const productRequest: ModifyProductRequest = {
      productId: this.productForm.get('id')?.value,
      productName: this.productForm.get('name')?.value,
      productDescription: this.productForm.get('description')?.value,
      productPrice: this.productForm.get('price')?.value,
      categoryId: this.productForm.get('category')?.value,
      stockQuantity: this.productForm.get('quantity')?.value,
    };
    try {
      const response = await this.productService.modifyProduct(productRequest);
      this.alertService.showAlert('Success', response, {
        context: 'Page',
        name: 'ProductManagementPage:addProduct',
      });
      window.location.reload();
    } catch (error) {}
  }

  async deleteProduct(productRow: Product) {
    try {
      await this.productService.deleteProduct(productRow.productId);
      this.alertService.showAlert('Success', 'Product deleted successfully', {
        context: 'Page',
        name: 'ProductManagementPage:deleteProduct',
      });
      window.location.reload();
    } catch (error) {}
  }

  openModal(edit: boolean) {
    this.productModal = {
      visible: true,
      edit: edit,
    };
  }

  closeModal() {
    this.productModal = {
      visible: false,
      edit: false,
    };
    this.productForm.reset();
  }
}
