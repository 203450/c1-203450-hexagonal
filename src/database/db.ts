import pgPromise, { IDatabase, IMain } from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const pgp: IMain = pgPromise({});

const config = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
};

const db: IDatabase<any> = pgp(config);

export { db};
