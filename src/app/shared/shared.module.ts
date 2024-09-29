import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SideMenuComponent } from '../core/layout/side-menu/side-menu.component';
// Shared components, directives, and pipes
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { ModalComponent } from './components/modal/modal.component';
// import { HighlightDirective } from './directives/highlight.directive';
// import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    SideMenuComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    SideMenuComponent,
  ],
})
export class SharedModule {}
