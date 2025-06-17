import { DepositDto } from '../dtos/deposit.dto';
import { PaymentDto } from '../dtos/payment.dto';

export interface ITransferService {
  payment(dto: PaymentDto): Promise<void>;
  deposit(dto: DepositDto): Promise<void>;
}
