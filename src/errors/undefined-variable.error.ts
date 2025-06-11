export class UndefinedVariableError extends Error {
  constructor(key: string) {
    super(`Undefined ${key} variable`);
    this.name = 'UndefinedVariableError';
  }
}
