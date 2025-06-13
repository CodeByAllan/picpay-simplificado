export class AlreadyExistsError extends Error {
  code: number;
  constructor(field: string) {
    super(`${field} already exists`);
    this.name = 'AlreadyExistsError';
    this.code = 409;
  }
}
