import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { sortBy } from 'sort-by-typescript';
import { LabelComponent } from '../label/label.component';
import { ButtonComponent } from '../buttons/button/button.component';
import { ImageButtonComponent } from '../buttons/image-button/image-button.component';
import { BehaviorSubject } from 'rxjs';

export interface Column {
  field: string; // Corresponds to the property in the data object
  header: string; // Header label for the column
  hide?: boolean;
}

interface Sorting {
  type: 'asc' | 'dsc';
  sortingField: string | null;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LabelComponent,
    ImageButtonComponent,
  ],
})
export class GridComponent implements OnInit, OnChanges {
  @Input() columns: Column[] = [];
  @Input() data: any[] = [];
  @Input({ required: false }) filterColumn: string = '';
  @Input({ required: false }) filterText: string = '';
  @Input({ required: false }) showEditBtn: boolean = false;
  @Input({ required: false }) showDeleteBtn: boolean = false;

  @Output() deleteRowData = new EventEmitter<any>();
  @Output() editRowData = new EventEmitter<any>();

  initialGridData: any[] = [];
  gridDataAfterModifying: any[] = [];

  sorting!: Sorting;

  constructor() {}

  ngOnInit() {
    this.initialState();
    this.gridDataAfterModifying = this.data;
    this.initialGridData = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterText'] || changes['filterColumn']) {
      this.applyFiltering();
    }
  }

  initialState() {
    this.sorting = {
      type: 'asc',
      sortingField: null,
    };
  }

  sortingGrid(col: Column) {
    this.sorting.type = this.sorting.type === 'asc' ? 'dsc' : 'asc';
    this.gridDataAfterModifying = this.data.sort(
      sortBy(this.sorting.type === 'asc' ? col.field : '-' + col.field)
    );
  }

  editRow(rowData: any) {
    this.editRowData.emit(rowData);
  }

  deleteRow(rowData: any) {
    this.deleteRowData.emit(rowData);
  }

  private applyFiltering() {
    if (this.filterText.length > 0 && this.filterColumn.length > 0) {
      this.gridDataAfterModifying = this.initialGridData.filter((data) =>
        (data[this.filterColumn] as string)
          .toLowerCase()
          .includes(this.filterText.toLowerCase())
      );
    } else {
      // Reset to initial data if no filtering
      this.gridDataAfterModifying = [...this.initialGridData];
    }
  }

  get activeColumns() {
    return this.columns.filter((col) => !col.hide);
  }
}
