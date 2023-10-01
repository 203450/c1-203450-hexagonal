import pgPromise, { IDatabase, IMain } from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp: IMain = pgPromise({});

const config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db: IDatabase<any> = pgp(config);

export { db};

/*require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectarse a PostgreSQL:', error);
  });

module.exports = sequelize;*/