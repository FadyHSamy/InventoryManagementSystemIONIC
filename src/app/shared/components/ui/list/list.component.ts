import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [IonList, CommonModule, ReactiveFormsModule],
})
export class ListComponent implements OnInit {
  @Input({ required: false }) lines: 'full' | 'inset' | 'none' = 'full';
  constructor() {}

  ngOnInit() {}
}
