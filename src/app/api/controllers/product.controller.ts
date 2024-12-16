import { getPagination, readDB } from '@/lib/utils/db';
import { HttpSuccessCode } from '@/lib/types/response.schema';
import type { RequestHandler } from 'express';
import type { Product } from '@/lib/types/product.schema';
import type { PaginationFilter } from '@/lib/types/request.schema';

export default class ProductController {
  static getList: RequestHandler = async (req, res) => {
    const {
      page = 1,
      sort = 'asc',
      orderBy = 'id',
      limit = 8,
    } = req.query as PaginationFilter<Product>;

    const data = await readDB<Product>('/products.json', { sort, orderBy });
    const [products, totalRows, totalPages] = getPagination({
      data,
      page: +page,
      limit,
    });

    res.status(HttpSuccessCode.OK).json({
      data: products,
      pagination: {
        page: +page,
        totalRows,
        totalPages,
      },
    });
  };
}
