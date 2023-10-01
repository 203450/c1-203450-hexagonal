"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pgp = (0, pg_promise_1.default)({});
const config = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};
const db = pgp(config);
exports.db = db;
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
