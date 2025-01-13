import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    imports: [CommonModule,ReactiveFormsModule],
})
export class LabelComponent implements OnInit {
  @Input() isRequired: boolean = false;
  constructor() {}

  ngOnInit() {}
}
