import { z } from 'zod';
import { BaseModel } from './base.schema';

export enum Sort {
  ASC = 'ASC',
  DESC = 'DESC',
}

const paginationFilterSchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(8),
  sort: z.enum([Sort.ASC, Sort.DESC]).optional().default(Sort.ASC),
  orderBy: z.string().optional().default('id'),
});

export function parsePaginationFilter(data: unknown) {
  return paginationFilterSchema.parse(data);
}

export type PaginationFilter<T extends BaseModel> = Omit<
  ReturnType<typeof parsePaginationFilter>,
  'orderBy'
> & {
  orderBy: keyof T;
};
