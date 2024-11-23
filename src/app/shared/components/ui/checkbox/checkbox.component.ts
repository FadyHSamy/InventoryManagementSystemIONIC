import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

interface CheckBoxProps{
  label:string;
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CheckboxComponent implements OnInit {
  @Input({required:true}) props!:CheckBoxProps;
  constructor() {}

  ngOnInit() {}
}
