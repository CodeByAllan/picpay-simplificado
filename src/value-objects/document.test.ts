import { IsNotValidError } from '../errors/is-not-valid.error';
import { IsRequiredError } from '../errors/is-required.error';
import { Document } from './document';

describe('Value Object: Document', () => {
  it('should throw a IsRequiredError if value is empty', () => {
    expect(() => {
      new Document('');
    }).toThrow(IsRequiredError);
  });
  it('should throw a IsNotValidError if value is not document', () => {
    expect(() => {
      new Document('abc');
    }).toThrow(IsNotValidError);
  });
  it('must create an instance of document with cpf', () => {
    const document = new Document('123.456.789-10');
    expect(document).toBeInstanceOf(Document);
    expect(document.value).toBe('12345678910');
  });
  it('must create an instance of document with cnpj', () => {
    const document = new Document('12.345.678/0009-10');
    expect(document).toBeInstanceOf(Document);
    expect(document.value).toBe('12345678000910');
  });
});
