import { Request, Response } from 'express';
import { ITransferService } from '../services/transfer-service.interface';
import { PaymentDto } from '../dtos/payment.dto';
import { Document } from '../value-objects/document';
import { Amount } from '../value-objects/amount';
import { DepositDto } from '../dtos/deposit.dto';

export class TransferController {
  constructor(private readonly service: ITransferService) {}
  payment = async (req: Request, res: Response) => {
    const dto = new PaymentDto();
    dto.payer = new Document(req.body.payer);
    dto.payee = new Document(req.body.payee);
    dto.amount = new Amount(req.body.value);
    await this.service.payment(dto);

    res.status(200).send();
  };
  deposit = async (req: Request, res: Response) => {
    const dto = new DepositDto();
    dto.document = new Document(req.body.document);
    dto.amount = new Amount(req.body.value);
    await this.service.deposit(dto);
    res.status(200).send();
  };
}
