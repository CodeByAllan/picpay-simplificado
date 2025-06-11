export class DatabaseInitializeError extends Error {
  constructor(message: string) {
    super(`Failed to Database Initialize: ${message}`);
    this.name = 'DatabaseInitializeError';
  }
}
