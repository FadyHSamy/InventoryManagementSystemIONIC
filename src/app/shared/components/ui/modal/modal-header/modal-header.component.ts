import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ModalHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
