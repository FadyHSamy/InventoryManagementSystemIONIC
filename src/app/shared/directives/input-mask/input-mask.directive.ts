import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputMask]',
  standalone: true,
})
export class InputMaskDirective implements OnInit, OnDestroy {
  @Input() mask: string = '';
  private inputListener!: (event: Event) => void;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.mask) {
      this.applyMask();
    }
  }
  ngOnDestroy(): void {
    if (this.inputListener) {
      this.el.nativeElement.removeEventListener('input', this.inputListener);
    }
  }
  private applyMask() {
    const inputElement = this.el.nativeElement;

    this.inputListener = (event: Event) => {
      switch (this.mask) {
        case 'number':
          this.formatNumber(event);
          break;
        case 'phone':
          this.formatPhone(event);
          break;
        case 'date':
          this.formatDate(event);
          break;
        default:
          this.formatText(event);
      }
    };

    inputElement.addEventListener('input', this.inputListener);
  }
  private formatNumber(event: Event) {
    const target = event.target as HTMLInputElement;
    target.value = target.value.replace(/\D/g, ''); // Remove non-numeric characters
  }
  private formatPhone(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue =
      value.length > 6
        ? `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`
        : value.length > 3
        ? `(${value.slice(0, 3)}) ${value.slice(3)}`
        : `(${value.slice(0, 3)})`;

    target.value = formattedValue;
  }
  private formatDate(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue =
      value.length > 4
        ? `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`
        : value.length > 2
        ? `${value.slice(0, 2)}/${value.slice(2)}`
        : `${value.slice(0, 2)}`;

    target.value = formattedValue;
  }
  private formatText(event: Event) {
    const target = event.target as HTMLInputElement;
  }
}
