import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AboutSection } from '@/lib/components/sections/landing/about/about.component';
import { Banner } from '@/lib/components/banner/banner.component';
import { Card } from '@/lib/components/card/card.component';
import { ProductService } from '@/lib/services/product.service';
import type { Product } from '@/lib/types/product.schema';

@Component({
  selector: 'landing-page',
  imports: [Banner, AboutSection, Card, CurrencyPipe],
  templateUrl: './landing.component.html',
})
export class LandingPage implements OnInit {
  popularProducts: Product[] = [];
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getPopular().subscribe({
      next: ({ data }) => {
        this.popularProducts = data;
      },
    });
  }
}
