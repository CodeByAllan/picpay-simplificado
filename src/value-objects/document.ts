import { IsNotValidError } from '../errors/is-not-valid.error';
import { IsRequiredError } from '../errors/is-required.error';

export class Document {
  readonly value: string;
  constructor(value: string) {
    if (!value) {
      throw new IsRequiredError('Document');
    }
    const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    const cnpjRegex = /^\d{2}\.?\d{3}\.\d{3}\/?\d{4}\-?\d{2}$/;
    if (!cpfRegex.test(value) && !cnpjRegex.test(value)) {
      throw new IsNotValidError('Document');
    }
    this.value = value.replace(/\D/g, '');
  }
}
