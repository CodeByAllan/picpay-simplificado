import { Amount } from '../value-objects/amount';
import { Document } from '../value-objects/document';

export class PaymentDto {
  payer!: Document;
  payee!: Document;
  amount!: Amount;
}
