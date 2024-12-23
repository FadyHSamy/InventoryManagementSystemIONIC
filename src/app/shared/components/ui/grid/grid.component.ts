import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { sortBy } from 'sort-by-typescript';
import { LabelComponent } from "../label/label.component";


export interface Column {
  field: string; // Corresponds to the property in the data object
  header: string; // Header label for the column
}

interface Sorting{
  type:'asc'|'dsc';
  sortingField:string|null;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, LabelComponent],
})
export class GridComponent implements OnInit {
  @Input() columns: Column[] = []; // Define column headers and field mapping
  @Input() data: any[] = []; // Data to display in the grid

  initialGridData:any[]=[];
  gridDataAfterModifying:any[]=[];

  sorting!:Sorting;

  constructor() {}

  ngOnInit() {
    this.initialState();
    this.gridDataAfterModifying = this.data;
    this.initialGridData = this.data;
  }

  initialState(){
    this.sorting = {
      type:'asc',
      sortingField:null
    }
  }

  sortingGrid(col:Column){
    this.sorting.type = this.sorting.type === 'asc' ? 'dsc':'asc';
    this.gridDataAfterModifying = this.data.sort(sortBy( this.sorting.type === 'asc'? col.field : '-' + col.field));
  }


}
