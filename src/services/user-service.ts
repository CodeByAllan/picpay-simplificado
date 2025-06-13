import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { DeleteResult, Repository } from 'typeorm';
import { AlreadyExistsError } from '../errors/already-exists.error';
import { Document } from '../value-objects/document';
import { NotFoundError } from '../errors/not-found.error';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { IUserService } from './user-service.interface';

export class UserService implements IUserService {
  constructor(private readonly repository: Repository<User>) {}
  async create(dto: CreateUserDto): Promise<void> {
    const existingUser = await this.repository.findOne({
      where: [{ email: dto.email.value }, { document: dto.document.value }],
      withDeleted: true,
    });
    if (existingUser) {
      if (existingUser.email === dto.email.value) {
        throw new AlreadyExistsError('Email');
      }
      if (existingUser.document === dto.document.value) {
        throw new AlreadyExistsError('Document');
      }
    }

    const user = this.repository.create({
      firstname: dto.name.firstname,
      lastname: dto.name.lastname,
      email: dto.email.value,
      document: dto.document.value,
      password: dto.password.value,
      type: dto.type,
    });
    await this.repository.save(user);
  }
  async getAll(): Promise<User[]> {
    return this.repository.find();
  }
  async getByDocument(document: Document): Promise<User> {
    const user = await this.repository.findOne({
      where: { document: document.value },
    });
    if (!user) {
      throw new NotFoundError('User');
    }
    return user;
  }
  async update(document: Document, dto: UpdateUserDto): Promise<User> {
    const existingUser = await this.getByDocument(document);
    if (dto.email?.value) {
      const isEmailfree = await this.repository.findOne({
        where: { email: dto.email.value },
        withDeleted: true,
      });
      if (isEmailfree && isEmailfree.id !== existingUser.id) {
        throw new AlreadyExistsError('Email');
      }
    }
    const user = this.repository.merge(existingUser, {
      email: dto.email?.value ?? existingUser.email,
      password: dto.password?.value ?? existingUser.password,
    });
    return this.repository.save(user);
  }
  async softDelete(document: Document): Promise<DeleteResult> {
    const existingUser = await this.getByDocument(document);
    return this.repository.softDelete(existingUser.id);
  }
}
