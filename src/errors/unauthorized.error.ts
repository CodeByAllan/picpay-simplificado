export class UnauthorizedError extends Error {
  code: number;
  constructor() {
    super('Unauthorized');
    this.name = 'UnauthorizedError';
    this.code = 401;
  }
}
