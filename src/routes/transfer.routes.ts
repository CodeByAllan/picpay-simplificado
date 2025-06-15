import { Router } from 'express';
import AppDataSource from '../database/database';
import { User } from '../entities/user.entity';
import { TransferService } from '../services/transfer-service';
import { TransferController } from '../controllers/transfer.controller';

const transferRoutes = Router();
const repo = AppDataSource.getRepository(User);
const service = new TransferService(repo);
const controller = new TransferController(service);
transferRoutes.route('/transfer').post(controller.payment);

export default transferRoutes;
