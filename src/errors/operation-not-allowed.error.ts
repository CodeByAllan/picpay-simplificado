export class OperationNotAllowedError extends Error {
  code: number;
  constructor(user: string) {
    super(`${user} is not authorized to perform this operation`);
    this.name = 'OperationNotAllowedError';
    this.code = 401;
  }
}
