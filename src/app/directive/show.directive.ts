import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[show]'
})
export class ShowDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() set show(val: boolean) {
    if (val === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    }
  }
}