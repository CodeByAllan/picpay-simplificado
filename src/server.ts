import App from './app';
import configs from './config/configs';
import AppDataSource from './database/database';
import { DatabaseInitializeError } from './errors/database-initialize.error';
import { ServerRunError } from './errors/server-run.error';

function bootstrap() {
  try {
    App.listen(configs.env.PORT, () => {
      console.log(`Server is running`);
    });
  } catch (err: any) {
    throw new ServerRunError(err.message);
  }
  try {
    AppDataSource.initialize();
  } catch (err: any) {
    throw new DatabaseInitializeError(err.message);
  }
}
bootstrap();
