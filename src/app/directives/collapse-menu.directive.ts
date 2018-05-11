import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCollapseMenu]'
})
export class CollapseMenuDirective {

  constructor(private element: ElementRef,
              private render: Renderer2) {
    this.render.listen(this.element.nativeElement, 'click', () => {
      this.render.addClass(this.element.nativeElement.children[0], 'rotate-top-bar');
      this.render.addClass(this.element.nativeElement.children[1], 'rotate-middle-bar');
      this.render.addClass(this.element.nativeElement.children[2], 'rotate-bottom-bar');
    });
  }
}
