import { UndefinedVariableError } from '../errors/undefined-variable.error';

export function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new UndefinedVariableError(key);
  }
  return value;
}
