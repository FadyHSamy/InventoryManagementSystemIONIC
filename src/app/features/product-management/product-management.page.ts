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

interface ProductGrid {
  columns: Column[];
  products: any[];
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
  ],
})
export class ProductManagementPage implements OnInit {
  productGrid!: ProductGrid;
  constructor(private productService: ProductService) {}

  async ngOnInit() {
    this.initializeState();
    const products = (await this.productService.getAllProducts()).product;

    this.productGrid.columns = [
      { field: 'productName', header: 'Name' },
      { field: 'productDescription', header: 'Description' },
      { field: 'categoryName', header: 'Category' },
      { field: 'productPrice', header: 'Price' },
    ];
    this.productGrid.products = products.map((prod) => ({
      productName: prod.productName,
      productDescription: prod.productDescription,
      categoryId: prod.CategoryName,
      productPrice: prod.productPrice,
    }));
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
}
