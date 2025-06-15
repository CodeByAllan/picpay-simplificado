export class TimeoutError extends Error {
  code: number;
  constructor(message: string) {
    super(`failed to try ${message} timed out`);
    this.name = 'TimeoutError';
    this.code = 504;
  }
}
