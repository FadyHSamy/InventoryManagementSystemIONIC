import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonImg } from '@ionic/angular/standalone';

interface ImageProp {
  source?: string;
  description?: string;
}
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  standalone: true,
  imports: [IonImg, CommonModule, ReactiveFormsModule],
})
export class ImageComponent implements OnInit {
  @Input({ required: true }) imageProp!: ImageProp;
  visible!: boolean;
  constructor() {}

  ngOnInit() {
    this.visible = this.imageProp.source ? true : false;
  }
}
