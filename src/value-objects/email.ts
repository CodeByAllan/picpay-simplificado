import { IsNotValidError } from '../errors/is-not-valid.error';
import { IsRequiredError } from '../errors/is-required.error';

export class Email {
  readonly value: string;
  constructor(value: string) {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      throw new IsRequiredError('Email');
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(trimmedValue)) {
      throw new IsNotValidError('Email');
    }
    this.value = trimmedValue.toLowerCase();
  }
}
