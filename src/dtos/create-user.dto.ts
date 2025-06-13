import { UserType } from '../types/user-type.enum';
import { Document } from '../value-objects/document';
import { Email } from '../value-objects/email';
import { FullName } from '../value-objects/full-name';
import { Password } from '../value-objects/password';
export class CreateUserDto {
  name!: FullName;
  email!: Email;
  document!: Document;
  password!: Password;
  type!: UserType;
}
