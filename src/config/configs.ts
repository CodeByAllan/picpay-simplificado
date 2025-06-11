import { NotNumberError } from '../errors/not-number.error';
import { getEnv } from '../utils/get-env';
import { config } from 'dotenv';

config();
const env = {
  PORT: (() => {
    const port = parseInt(getEnv('PORT'), 10);
    if (isNaN(port)) {
      throw new NotNumberError();
    }
    return port;
  })(),
  DB_HOST: getEnv('DB_HOST'),
  DB_PORT: (() => {
    const port = parseInt(getEnv('DB_PORT'), 10);
    if (isNaN(port)) {
      throw new NotNumberError();
    }
    return port;
  })(),
  DB_USER: getEnv('DB_USER'),
  DB_PASS: getEnv('DB_PASS'),
  DB_NAME: getEnv('DB_NAME'),
  DB_SSL: getEnv('DB_SSL') ? true : false,
};
export default { env };
