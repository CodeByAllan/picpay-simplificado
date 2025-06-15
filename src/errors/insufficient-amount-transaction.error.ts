export class InsufficientAmountTransactionError extends Error {
  code: number;
  constructor(value: string) {
    super(` transaction value below the minimum value of ${value}`);
    this.name = 'InsufficientAmountTransactionError';
    this.code = 422;
  }
}
