import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextHeaderComponent } from '../../shared/components/ui/text-header/text-header.component';
import { GridComponent } from '../../shared/components/ui/grid/grid.component';
import { GridHeaderComponent } from '../../shared/components/ui/grid/grid-header/grid-header.component';
import { GridContentComponent } from '../../shared/components/ui/grid/grid-content/grid-content.component';
import { TableColumnComponent } from '../../shared/components/ui/grid/table-column/table-column.component';
import { TableRowComponent } from '../../shared/components/ui/grid/table-row/table-row.component';
import { IonRow, IonLabel } from '@ionic/angular/standalone';
import { TableHeaderComponent } from '../../shared/components/ui/grid/table-header/table-header.component';
import { LabelComponent } from "../../shared/components/ui/label/label.component";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
  standalone: true,
  imports: [IonLabel,
    CommonModule,
    FormsModule,
    TextHeaderComponent,
    GridComponent,
    GridHeaderComponent,
    GridContentComponent,
    TableColumnComponent,
    TableRowComponent,
    TableHeaderComponent, LabelComponent],
})
export class InventoryPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
