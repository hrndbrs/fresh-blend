import { BaseModel } from './base.schema';

export interface Product extends BaseModel {
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  purchased: number;
}
