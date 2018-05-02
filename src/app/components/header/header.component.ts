import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbar') navbar: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      this.renderer.addClass(this.navbar.nativeElement, 'scrolled');
      this.renderer.addClass(this.navbar.nativeElement, 'text-white');
    } else if (number < 20) {
      this.renderer.removeClass(this.navbar.nativeElement, 'scrolled');
    }
  }
}
