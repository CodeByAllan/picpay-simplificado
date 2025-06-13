export class NotFoundError extends Error {
  code: number;
  constructor(field: string) {
    super(`${field} not found!`);
    this.name = 'NotFoundError';
    this.code = 404;
  }
}
