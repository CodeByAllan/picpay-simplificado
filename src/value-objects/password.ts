import { IsNotValidError } from '../errors/is-not-valid.error';
import { IsRequiredError } from '../errors/is-required.error';

export class Password {
  readonly value: string;
  constructor(value: string) {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      throw new IsRequiredError('Password');
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(trimmedValue)) {
      throw new IsNotValidError('Password');
    }
    this.value = trimmedValue;
  }
}
