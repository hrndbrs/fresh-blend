import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '@/lib/services/product.service';
import { Card } from '@/lib/components/card/card.component';
import { Pagination } from '@/lib/components/pagination/pagination.component';
import type { Product } from '@/lib/types/product.schema';

@Component({
  standalone: true,
  selector: 'product-list-page',
  templateUrl: './product-list.component.html',
  imports: [Card, CurrencyPipe, Pagination],
})
export class ProductListPage implements OnInit {
  productService = inject(ProductService);
  products: Product[] = [];

  totalPages = 1;

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
