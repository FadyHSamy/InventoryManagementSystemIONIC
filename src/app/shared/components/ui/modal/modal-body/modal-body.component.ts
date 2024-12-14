import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-body',
    templateUrl: './modal-body.component.html',
    styleUrls: ['./modal-body.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ModalBodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
