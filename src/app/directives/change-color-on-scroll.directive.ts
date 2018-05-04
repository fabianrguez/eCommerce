import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColorOnScroll]'
})
export class ChangeColorOnScrollDirective {

  private linkElements: NodeList;

  constructor(private renderer: Renderer2,
              private element: ElementRef) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.linkElements = this.element.nativeElement.querySelectorAll('.nav-link');
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      this.renderer.addClass(this.element.nativeElement, 'scrolled');
      this.addWhiteTextClass(this.linkElements);
    } else if (number < 20) {
      this.renderer.removeClass(this.element.nativeElement, 'scrolled');
      this.removeWhiteTextClass(this.linkElements);
    }
  }

  private addWhiteTextClass(elements: NodeList) {
    for (let index = 0; index < elements.length; index++) {
      this.renderer.addClass(elements.item(index), 'text-white');
    }
  }

  private removeWhiteTextClass(elements: NodeList) {
    for (let index = 0; index < elements.length; index++) {
      this.renderer.removeClass(elements.item(index), 'text-white');
    }
  }

}
