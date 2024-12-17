import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextHeaderComponent } from '../../shared/components/ui/text-header/text-header.component';
import { GridComponent } from '../../shared/components/ui/grid/grid.component';
import { GridHeaderComponent } from '../../shared/components/ui/grid/grid-header/grid-header.component';
import { GridContentComponent } from '../../shared/components/ui/grid/grid-content/grid-content.component';
import { TableColumnComponent } from '../../shared/components/ui/grid/table-column/table-column.component';
import { TableRowComponent } from '../../shared/components/ui/grid/table-row/table-row.component';
import { TableHeaderComponent } from '../../shared/components/ui/grid/table-header/table-header.component';
import { LabelComponent } from '../../shared/components/ui/label/label.component';
import { IonContent, IonRow,IonCol } from '@ionic/angular/standalone';
import { CardComponent } from "../../shared/components/ui/card/card.component";
import { CardContentComponent } from "../../shared/components/ui/card/card-content/card-content.component";
import { ButtonComponent } from "../../shared/components/ui/buttons/button/button.component";
import { SearchbarComponent } from "../../shared/components/ui/searchbar/searchbar.component";

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
    LabelComponent,
    GridComponent,
    GridHeaderComponent,
    TableRowComponent,
    TableHeaderComponent,
    GridContentComponent,
    TableColumnComponent,
    CardComponent,
    CardContentComponent,
    ButtonComponent,
    IonCol,
    SearchbarComponent
]
})
export class ProductManagementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchResult(value:string){
  console.log("ProductManagementPage ~ searchResult ~ value:", value)

  }

}
