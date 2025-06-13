import { Email } from '../value-objects/email';
import { Password } from '../value-objects/password';

export class UpdateUserDto {
  email?: Email;
  password?: Password;
}
