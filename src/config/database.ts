import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isSSL = process.env.DB_SSL === 'true';

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'atv_ldw',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || process.env.DB_PASS || 'suasenha',
  {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: isSSL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
  },
);
