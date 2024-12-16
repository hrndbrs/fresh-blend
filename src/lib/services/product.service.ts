import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getParams } from '../utils/params';
import type { Product } from '../types/product.schema';
import type { PaginationFilter } from '../types/request.schema';
import type { FetchResponse } from '../types/response.schema';

type MultiProductResponse = FetchResponse<Product[]>;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  get(
    params: PaginationFilter<Product> = {}
  ): Observable<MultiProductResponse> {
    return this.http.get<MultiProductResponse>('/api/products', {
      params: getParams(params),
    });
  }

  getPopular(): Observable<MultiProductResponse> {
    const params: PaginationFilter<Product> = {
      limit: 10,
      sort: 'desc',
      orderBy: 'purchased',
    };

    return this.http.get<MultiProductResponse>('/api/products', {
      params: getParams(params),
    });
  }
}
