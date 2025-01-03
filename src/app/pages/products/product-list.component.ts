import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '@/lib/services/product.service';
import { Card } from '@/lib/components/card/card.component';
import { Pagination } from '@/lib/components/pagination/pagination.component';
import type { Product } from '@/lib/types/product.schema';

@Component({
  standalone: true,
  selector: 'product-list-page',
  templateUrl: './product-list.component.html',
  imports: [Card, CurrencyPipe, Pagination, RouterLink],
})
export class ProductListPage implements OnInit {
  products: Product[] = [];
  totalPages = 1;

  private readonly productService = inject(ProductService);

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(page = 1) {
    this.productService
      .get({ page, limit: 9 })
      .subscribe(({ data, pagination }) => {
        this.products = data;
        this.totalPages = pagination.totalPages;
      });
  }
}
