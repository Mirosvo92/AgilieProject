import {Directive, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appHide]'
})
export class HideDirective {
  @Input() isClose;
  constructor( private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.renderer.removeClass(this.isClose, 'open');
  }

}
