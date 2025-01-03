import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@/lib/services/product.service';
import type { Product } from '@/lib/types/product.schema';

@Component({
  selector: 'product-detail-page',
  templateUrl: './product-detail.component.html',
  imports: [CommonModule],
})
export class ProductDetailPage implements OnInit {
  product?: Product;
  id?: number;
  voted: boolean = false;

  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    if (!this.id) {
      this.redirectNotFound();
      return;
    }

    this.productService.getDetail(this.id).subscribe({
      next: ({ data }) => {
        this.product = data;
      },
      error: () => {
        this.redirectNotFound();
      },
    });
  }

  private redirectNotFound() {
    this.router.navigate(['/not-found']);
  }

  upvote() {
    if (!this.id) return;

    this.productService.upvote(this.id).subscribe({
      next: ({ data }) => {
        if (!this.product) return;
        console.log(data);
        this.product.vote = data.vote;
        this.voted = true;
      },
    });
  }
}
