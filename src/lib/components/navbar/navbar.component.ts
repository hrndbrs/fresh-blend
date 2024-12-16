import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  input,
} from '@angular/core';
import cn from '@/lib/utils/cn';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class Navbar {
  class = input<string>();

  @HostBinding('class') get className(): string {
    return cn(
      'fixed z-[1000] top-0 w-full duration-300 transition-colors',
      this.class
    );
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY) {
      this.el.nativeElement.classList.add('bg-cyan-50', 'shadow-xl');
    } else {
      this.el.nativeElement.classList.remove('bg-cyan-50', 'shadow-xl');
    }
  }

  navLinks = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/#about',
      label: 'Our Story',
    },
    {
      href: '/products',
      label: 'Products',
    },
    {
      href: '/#contact',
      label: 'Contact Us',
    },
  ];

  constructor(private readonly el: ElementRef<HTMLElement>) {}
}
