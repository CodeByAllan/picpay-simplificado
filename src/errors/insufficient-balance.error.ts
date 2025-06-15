export class InsufficientBalanceError extends Error {
  code: number;
  constructor() {
    super(`does not have enough balance to complete this transaction`);
    this.name = 'InsufficientBalanceError';
    this.code = 422;
  }
}
