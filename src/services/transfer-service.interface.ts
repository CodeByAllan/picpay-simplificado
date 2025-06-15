import { PaymentDto } from '../dtos/payment.dto';

export interface ITransferService {
  payment(dto: PaymentDto): Promise<void>;
}
