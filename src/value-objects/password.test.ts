import { IsNotValidError } from '../errors/is-not-valid.error';
import { IsRequiredError } from '../errors/is-required.error';
import { Password } from './password';

describe('Value Object: Password', () => {
  it('should throw a IsRequiredError if value is empty', () => {
    expect(() => {
      new Password('');
    }).toThrow(IsRequiredError);
  });
  it('should throw an IsNotValidError if the value is not a valid password', () => {
    expect(() => {
      new Password('test');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('TEST');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('Test');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('1234');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('test1234');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('TEST1234');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('Test1234');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('test1234@');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Password('TEST1234@');
    }).toThrow(IsNotValidError);
  });
  it('must create an instance of password with valid value', () => {
    const password = new Password('Test1234@');
    expect(password).toBeInstanceOf(Password);
    expect(password.value).toBe('Test1234@');
  });
});
