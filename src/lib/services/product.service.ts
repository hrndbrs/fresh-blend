import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getParams } from '../utils/params';
import type { PaginationFilter } from '../types/request.schema';
import type { Product } from '../types/product.schema';
import type { FetchResponse } from '../types/response.schema';

type MultiProductResponse = FetchResponse<Product[]>;
type SingleProductResponse = FetchResponse<Product>;
type UpvoteResponse = FetchResponse<{ vote: number }>;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/products';

  get(
    params: Partial<PaginationFilter<Product>> = {}
  ): Observable<MultiProductResponse> {
    return this.http.get<MultiProductResponse>(this.baseUrl, {
      params: getParams(params),
    });
  }

  getPopular(): Observable<MultiProductResponse> {
    return this.http.get<MultiProductResponse>(this.baseUrl + '/popular');
  }

  getDetail(id: number): Observable<SingleProductResponse> {
    return this.http.get<SingleProductResponse>(`${this.baseUrl}/${id}`);
  }

  upvote(id: number): Observable<UpvoteResponse> {
    return this.http.post<UpvoteResponse>(`${this.baseUrl}/${id}/vote`, {});
  }
}
