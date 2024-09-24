import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Shared components, directives, and pipes
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { ModalComponent } from './components/modal/modal.component';
// import { HighlightDirective } from './directives/highlight.directive';
// import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    // SpinnerComponent,
    // ModalComponent,
    // HighlightDirective,
    // CapitalizePipe
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // SpinnerComponent,
    // ModalComponent,
    // HighlightDirective,
    // CapitalizePipe
  ],
})
export class SharedModule {}
