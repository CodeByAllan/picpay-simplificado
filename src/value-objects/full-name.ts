import { IsRequiredError } from '../errors/is-required.error';

export class FullName {
  readonly firstname: string;
  readonly lastname: string;
  constructor(params: { firstname: string; lastname: string }) {
    if (!params.firstname) {
      throw new IsRequiredError('firstname');
    }
    if (!params.lastname) {
      throw new IsRequiredError('lastname');
    }
    this.firstname = params.firstname.trim();
    this.lastname = params.lastname.trim();
  }
}
