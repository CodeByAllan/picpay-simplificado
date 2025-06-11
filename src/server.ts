import App from './app';
import configs from './config/configs';
import { ServerRunError } from './errors/server-run.error';
function bootstrap() {
  try {
    App.listen(configs.env.PORT, () => {
      console.log(`Server is running`);
    });
  } catch (err: any) {
    throw new ServerRunError(err.message);
  }
}
bootstrap();
