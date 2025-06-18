import { InsufficientAmountTransactionError } from '../errors/insufficient-amount-transaction.error';
import { IsRequiredError } from '../errors/is-required.error';
import { NotNumberError } from '../errors/not-number.error';
import { Amount } from './amount';
describe('Value Object: Amount', () => {
  it('should throw a IsRequiredError if value is empty', () => {
    expect(() => {
      new Amount('');
    }).toThrow(IsRequiredError);
  });
  it('should throw a IsRequiredError if value is not number', () => {
    expect(() => {
      new Amount('abc');
    }).toThrow(NotNumberError);
  });
  it('should throw a IsRequiredError if value is not negative number', () => {
    expect(() => {
      new Amount('-10');
    }).toThrow(InsufficientAmountTransactionError);
  });
  it('must create an instance of amount with valid value', () => {
    const amount = new Amount('100');
    expect(amount).toBeInstanceOf(Amount);
    expect(amount.value).toBe(100);
  });
  it('must create an instance of amount with valid value decimal', () => {
    const amount = new Amount('1.52');
    expect(amount).toBeInstanceOf(Amount);
    expect(amount.value).toBe(1.52);
  });
});
