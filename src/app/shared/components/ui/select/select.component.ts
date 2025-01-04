import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [LabelComponent],
})
export class SelectComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) placeHolder: string = '';
  constructor() {}

  ngOnInit() {}
}
