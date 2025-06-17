import { Amount } from '../value-objects/amount';
import { Document } from '../value-objects/document';

export class DepositDto {
  document!: Document;
  amount!: Amount;
}
