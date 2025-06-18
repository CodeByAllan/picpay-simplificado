import { IsRequiredError } from '../errors/is-required.error';
import { FullName } from './full-name';

describe('Value Object: Full Name', () => {
  it('should throw a IsRequiredError if value is empty', () => {
    expect(() => {
      new FullName({ firstname: '', lastname: '' });
    }).toThrow(IsRequiredError);
    expect(() => {
      new FullName({ firstname: 'test', lastname: '' });
    }).toThrow(IsRequiredError);
    expect(() => {
      new FullName({ firstname: '', lastname: 'test' });
    }).toThrow(IsRequiredError);
  });
  it('must create an instance of full name with valid value', () => {
    const fullName = new FullName({ firstname: 'test', lastname: 'test' });
    expect(fullName).toBeInstanceOf(FullName);
    expect(fullName.firstname).toBe('test');
    expect(fullName.lastname).toBe('test');
  });
});
