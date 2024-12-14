import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-footer',
    templateUrl: './modal-footer.component.html',
    styleUrls: ['./modal-footer.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ModalFooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
