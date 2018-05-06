import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';


@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  constructor( private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
      if (!this.elementRef.nativeElement.classList.contains('open')) {
        this.renderer.addClass(this.elementRef.nativeElement, 'open');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      }
  }

}
