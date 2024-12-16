export interface PaginationFilter<T> {
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  orderBy?: keyof T;
}
