import { Router } from 'express';
import { UserService } from '../services/user-service';
import AppDataSource from '../database/database';
import { User } from '../entities/user.entity';
import { UserController } from '../controllers/user.controller';

const userRoutes = Router();
const repo = AppDataSource.getRepository(User);
const service = new UserService(repo);
const controller = new UserController(service);
userRoutes.route('/user').get(controller.getAll).post(controller.create);
userRoutes
  .route('/user/:document')
  .get(controller.getByDocument)
  .patch(controller.update)
  .delete(controller.softDelete);
export default userRoutes;
