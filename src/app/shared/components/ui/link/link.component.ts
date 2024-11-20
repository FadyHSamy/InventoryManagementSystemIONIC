import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

interface LinkProps {
  label:string;
}
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LinkComponent implements OnInit {
  @Input({ required: true }) props!: LinkProps;
  constructor() {}

  ngOnInit() {}
}
