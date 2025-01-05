import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import dotenv from 'dotenv';
import getDb from '../src/lib/config/db';
import type { Dialect } from 'sequelize';

dotenv.config();

async function createDatabase() {
  const sequelize = new Sequelize({
    dialect: process.env['DB_DIALECT'] as Dialect,
    host: process.env['DB_HOST'],
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    port: Number(process.env['DB_PORT']) || 3306,
  });

  await sequelize.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env['DB_NAME']}`,
    {}
  );
}

(async () => {
  if (process.argv[2] === 'up') {
    await createDatabase();
  }

  const sequelize = getDb();

  const umzug = new Umzug({
    migrations: {
      glob: 'db/migrations/*.ts',
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
    create: {
      folder: __dirname + '/migrations',
    },
  });

  await umzug.runAsCLI();
})();
