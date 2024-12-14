import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-header',
  templateUrl: './text-header.component.html',
  styleUrls: ['./text-header.component.scss'],
  imports:[CommonModule,ReactiveFormsModule]
})
export class TextHeaderComponent implements OnInit {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) headingSize!: 1 | 2 | 3 | 4 | 5 | 6;

  constructor() {}

  ngOnInit() {}
}
