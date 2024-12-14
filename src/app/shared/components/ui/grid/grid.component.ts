import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class GridComponent implements OnInit {
  @Input({ required: true }) columnSize: 'fixed' | 'auto' = 'auto';

  constructor() {}

  ngOnInit() {}
}
