import { InsufficientAmountTransactionError } from '../errors/insufficient-amount-transaction.error';
import { IsRequiredError } from '../errors/is-required.error';
import { NotNumberError } from '../errors/not-number.error';

export class Amount {
  readonly value: number;
  constructor(value: string) {
    if (!value) {
      throw new IsRequiredError('value');
    }
    const amount = Number(value) as number;
    if (isNaN(amount)) {
      throw new NotNumberError();
    }
    if (amount < 0.01) {
      throw new InsufficientAmountTransactionError('0.01');
    }
    this.value = amount;
  }
}
