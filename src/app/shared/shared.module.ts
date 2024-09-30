import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SideMenuComponent } from '../core/layout/side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';
// Shared components, directives, and pipes
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { ModalComponent } from './components/modal/modal.component';
// import { HighlightDirective } from './directives/highlight.directive';
// import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    ButtonComponent,
    SideMenuComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent, // Export it so it can be reused
    IonicModule,
    SideMenuComponent,
  ],
})
export class SharedModule {}
