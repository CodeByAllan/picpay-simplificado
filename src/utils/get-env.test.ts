import { UndefinedVariableError } from '../errors/undefined-variable.error';
import { getEnv } from './get-env';

describe('Function: getEnv', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });
  afterAll(() => {
    process.env = env;
  });
  it('should throw an UndefinedVariableError when the environment variable does not exist', () => {
    expect(() => {
      getEnv('PORT');
    }).toThrow(UndefinedVariableError);
  });
  it('should return the value when the environment variable exists', () => {
    process.env['PORT'] = '80';
    const result = getEnv('PORT');
    expect(result).toBe('80');
  });
});
