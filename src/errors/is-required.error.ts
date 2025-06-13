export class IsRequiredError extends Error {
  code: number;
  constructor(field: string) {
    super(`${field} is required`);
    this.name = 'IsRequiredError';
    this.code = 400;
  }
}
