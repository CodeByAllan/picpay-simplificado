export class NotNumberError extends Error {
  constructor() {
    super(`Is not a valid number`);
    this.name = 'NotNumberError';
  }
}
