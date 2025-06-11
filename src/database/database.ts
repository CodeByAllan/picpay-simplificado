import { DataSource } from 'typeorm';
import configs from '../config/configs';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: configs.env.DB_HOST,
  port: configs.env.DB_PORT,
  username: configs.env.DB_USER,
  password: configs.env.DB_PASS,
  database: configs.env.DB_NAME,
  ssl: configs.env.DB_SSL,
});

export default AppDataSource;
