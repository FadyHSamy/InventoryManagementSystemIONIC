import { Component, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: [IonLabel],
})
export class LabelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
