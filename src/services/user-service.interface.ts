import { DeleteResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Document } from '../value-objects/document';

export interface IUserService {
  create(dto: CreateUserDto): Promise<void>;
  getAll(): Promise<User[]>;
  getByDocument(document: Document): Promise<User>;
  update(document: Document, dto: UpdateUserDto): Promise<User>;
  softDelete(document: Document): Promise<DeleteResult>;
}
