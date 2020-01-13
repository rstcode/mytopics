import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[slider]'
})
export class SliderDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() set slider(val: boolean) {
    if (val === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'active');
    }
  }
}