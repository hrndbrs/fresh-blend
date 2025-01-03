import { DataTypes, Model } from 'sequelize';
import getDb from '@/lib/config/db.js';
import type { Product } from '@/lib/types/product.schema';

class ProductModel extends Model implements Product {
  declare id: number;
  declare name: string;
  declare description: string;
  declare thumbnail: string;
  declare price: number;
  declare vote: number;
}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vote: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    sequelize: getDb(),
    modelName: 'Product',
    tableName: 'products',
  }
);

export default ProductModel;
