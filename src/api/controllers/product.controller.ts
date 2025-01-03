import { Op } from 'sequelize';
import ProductModel from '../models/product.model';
import { parsePaginationFilter, Sort } from '@/lib/types/request.schema';
import { HttpSuccessCode } from '@/lib/types/response.schema';
import type { RequestHandler } from 'express';

export default class ProductController {
  static readonly getList: RequestHandler = async (req, res) => {
    const { page, sort, orderBy, limit } = parsePaginationFilter(req.query);

    const offset = (page - 1) * limit;

    const { rows: products, count } = await ProductModel.findAndCountAll({
      limit: limit,
      order: [[orderBy, sort]],
      offset,
    });

    res.status(HttpSuccessCode.OK).json({
      data: products,
      pagination: {
        page: +page,
        totalRows: products.length,
        totalPages: Math.ceil(count / +limit),
      },
    });
  };

  static readonly getDetail: RequestHandler = async (req, res) => {
    const id = Number(req.params['id']);

    if (!id) throw new Error();

    const product = await ProductModel.findByPk(id);

    if (!product) throw new Error();

    res.status(200).json({
      data: product,
    });
  };

  static readonly getPopular: RequestHandler = async (_req, res) => {
    const products = await ProductModel.findAll({
      where: {
        vote: { [Op.gt]: 0 },
      },
      limit: 10,
      order: [['vote', Sort.DESC]],
    });

    res.status(200).json({
      data: products,
    });
  };

  static readonly upvote: RequestHandler = async (req, res) => {
    const id = Number(req.params['id']);

    if (!id) throw new Error();

    const product = await ProductModel.findByPk(id);

    if (!product) throw new Error();

    await product.increment('vote');
    await product.reload();

    res.status(200).json({
      data: {
        vote: product.vote,
      },
    });
  };
}
