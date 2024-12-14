import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonImg } from '@ionic/angular/standalone';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    imports: [IonImg, CommonModule, ReactiveFormsModule]
})
export class ImageComponent implements OnInit {
  @Input({ required: true }) source: string | null = null;
  @Input({ required: false }) description: string | null = null;
  visible!: boolean;
  constructor() {}

  ngOnInit() {
    this.visible = this.source ? true : false;
  }
}
