import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  imports: [LabelComponent],
})
export class TextAreaComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) placeholder: string = '';

  constructor() {}

  ngOnInit() {}
}
