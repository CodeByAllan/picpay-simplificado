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
};
export default { env };
