import * as dotenv from 'dotenv';
dotenv.config();

// environment
const NODE_ENV = process.env.NODE_ENV || 'dev';

// application
const APP_NAME = process.env.APP_NAME || 'monkeys';
const DOMAIN = process.env.DOMAIN || 'localhost';
const PORT = process.env.PORT || '8080';
const ENDPOINT = process.env.ENDPOINT || 'graphql';

// database
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '3306';
const DB_NAME = process.env.DB_NAME || APP_NAME;
const DB_URL =
  process.env.DB_URL ||
  `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

process.env.DB_URL = DB_URL;

export {
  NODE_ENV,
  DOMAIN,
  PORT,
  ENDPOINT,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_HOST,
  DB_URL,
  DB_NAME,
};
