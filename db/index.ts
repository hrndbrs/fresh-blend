import { Umzug, SequelizeStorage } from 'umzug';
import dotenv from 'dotenv';
import getDb from '../src/lib/config/db';

dotenv.config();

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

umzug.runAsCLI();
