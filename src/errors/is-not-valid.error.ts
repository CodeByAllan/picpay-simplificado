export class IsNotValidError extends Error {
  code: number;
  constructor(field: string) {
    super(`${field} is not valid`);
    this.name = 'IsNotValidError';
    this.code = 422;
  }
}
