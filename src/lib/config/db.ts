import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import type { Dialect } from 'sequelize';

dotenv.config();

let sequelize: Sequelize | undefined;

export default function getDb(): Sequelize {
  if (!sequelize)
    sequelize = new Sequelize({
      dialect: process.env['DB_DIALECT'] as Dialect,
      host: process.env['DB_HOST'],
      username: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD'],
      port: Number(process.env['DB_PORT']) || 3306,
      database: process.env['DB_NAME'],
    });

  return sequelize;
}
