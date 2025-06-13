import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/create-user.dto';
import { IUserService } from '../services/user-service.interface';
import { Document } from '../value-objects/document';
import { Email } from '../value-objects/email';
import { FullName } from '../value-objects/full-name';
import { Password } from '../value-objects/password';
import { UpdateUserDto } from '../dtos/update-user.dto';

export class UserController {
  constructor(private readonly service: IUserService) {}
  create = async (req: Request, res: Response) => {
    const dto = new CreateUserDto();
    dto.document = new Document(req.body.document);
    dto.email = new Email(req.body.email);
    dto.name = new FullName({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    dto.password = new Password(req.body.password);
    dto.type = req.body.type;
    await this.service.create(dto);
    res.status(201).send();
  };
  getAll = async (_req: Request, res: Response) => {
    const users = await this.service.getAll();
    res.status(200).json(users);
  };
  getByDocument = async (req: Request, res: Response) => {
    const document = new Document(req.params.document);
    const user = await this.service.getByDocument(document);
    res.status(200).send(user);
  };
  update = async (req: Request, res: Response) => {
    const document = new Document(req.params.document);
    const dto = new UpdateUserDto();
    if (req.body.email) {
      dto.email = new Email(req.body.email);
    }
    if (req.body.password) {
      dto.password = new Password(req.body.password);
    }
    const user = await this.service.update(document, dto);
    res.status(200).send(user);
  };
  softDelete = async (req: Request, res: Response) => {
    const document = new Document(req.params.document);
    const user = await this.service.softDelete(document);
    res.status(204).send(user);
  };
}
