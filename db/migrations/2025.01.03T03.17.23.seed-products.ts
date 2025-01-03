import fs from 'fs/promises';
import type { QueryInterface } from 'sequelize';
import type { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = async (params) => {
  const data = await fs.readFile('./db/seeders/products.json', 'utf-8');
  const products = JSON.parse(data).map((data: any) => {
    data.createdAt = new Date(data.createdAt);
    data.updatedAt = new Date();
    return data;
  });

  await params.context.bulkInsert('products', products);
};
export const down: MigrationFn<QueryInterface> = async (params) => {
  await params.context.bulkDelete('products', {});
};
