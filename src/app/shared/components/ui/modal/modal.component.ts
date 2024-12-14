import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
