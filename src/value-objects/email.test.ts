import { IsNotValidError } from '../errors/is-not-valid.error';
import { IsRequiredError } from '../errors/is-required.error';
import { Email } from './email';

describe('Value Object: Email', () => {
  it('should create an instance of Email with a valid address', () => {
    expect(() => {
      new Email('test@test');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Email('test.com');
    }).toThrow(IsNotValidError);
    expect(() => {
      new Email('test');
    }).toThrow(IsNotValidError);
  });
  it('should throw an IsRequiredError if the email is empty', () => {
    expect(() => {
      new Email('');
    }).toThrow(IsRequiredError);
  });
  it('must create an instance of email with valid value', () => {
    const email = new Email('test@test.com');
    expect(email).toBeInstanceOf(Email);
    expect(email.value).toBe('test@test.com');
  });
});
