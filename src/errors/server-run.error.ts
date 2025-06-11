export class ServerRunError extends Error {
  constructor(message: string) {
    super(`Failed to run server: ${message}`);
    this.name = 'ServerRunError';
  }
}
