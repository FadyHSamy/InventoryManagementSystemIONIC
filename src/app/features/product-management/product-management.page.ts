import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { LabelComponent } from "../../shared/components/ui/label/label.component";
import { InputComponent } from "../../shared/components/ui/input/input.component";
import { SelectComponent } from "../../shared/components/ui/select/select.component";
import { TextComponent } from "../../shared/components/ui/text/text.component";
import { TextAreaComponent } from "../../shared/components/ui/text-area/text-area.component";

interface ProductGrid<T> {
  columns: Column[];
  products: T[];
}
interface Product {
  productName: string;
  productDescription: string;
  categoryName: string;
  productPrice: number;
}
@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.page.html',
  styleUrls: ['./product-management.page.scss'],
  imports: [
    IonRow,
    IonContent,
    CommonModule,
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
    SelectComponent,
    TextAreaComponent
],
})
export class ProductManagementPage implements OnInit {
  productGrid!: ProductGrid<Product>;
  openNewProductModal = false;
  constructor(private productService: ProductService) {}

  async ngOnInit() {
    this.initializeState();
    const products = (await this.productService.getAllProducts()).product;

    this.productGrid = {
      columns: [
        { field: 'productName', header: 'Name' },
        { field: 'productDescription', header: 'Description' },
        { field: 'categoryName', header: 'Category' },
        { field: 'productPrice', header: 'Price' },
      ],
      products: products.map((prod) => ({
        productName: prod.productName,
        productDescription: prod.productDescription,
        categoryName: prod.CategoryName,
        productPrice: prod.productPrice,
      })),
    };
  }

  initializeState() {
    this.productGrid = {
      columns: [],
      products: [],
    };
  }

  searchResult(value: string) {
    console.log('searchResult ~ value:', value);
  }

  newProductBtn() {
    console.log('newProductBtn ~ clicked');
    this.openNewProductModal = true;
  }
  closeModal() {
    this.openNewProductModal = false;
  }
}
