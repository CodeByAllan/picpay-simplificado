import { Repository } from 'typeorm';
import { PaymentDto } from '../dtos/payment.dto';
import { InsufficientBalanceError } from '../errors/insufficient-balance.error';
import { NotFoundError } from '../errors/not-found.error';
import { OperationNotAllowedError } from '../errors/operation-not-allowed.error';
import { UserType } from '../types/user-type.enum';
import { ITransferService } from './transfer-service.interface';
import { User } from '../entities/user.entity';
import { UnauthorizedError } from '../errors/unauthorized.error';
import { TimeoutError } from '../errors/timeout.error';
import { DepositDto } from '../dtos/deposit.dto';

export class TransferService implements ITransferService {
  constructor(private readonly repo: Repository<User>) {}
  private async authorize() {
    try {
      const response = await fetch('https://util.devi.tools/api/v2/authorize', {
        method: 'GET',
      }).then((res) => res.json());
      if (!response.data.authorization) {
        throw new UnauthorizedError();
      }
    } catch {
      throw new UnauthorizedError();
    }
  }
  private async notify(toTry: number) {
    for (let attempt = 1; attempt <= toTry; attempt++) {
      const res = await fetch('https://util.devi.tools/api/v1/notify', {
        method: 'POST',
      });
      if (res.status === 204) {
        return;
      }
      if (attempt === toTry) {
        throw new TimeoutError(
          'transaction completed successfully but failed send to notify',
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  async payment(dto: PaymentDto): Promise<void> {
    await this.repo.manager.transaction(async (manager) => {
      const value = Number(dto.amount.value);
      const repo = manager.getRepository(User);
      const payer = await repo.findOne({
        where: { document: dto.payer.value },
        withDeleted: false,
      });
      if (!payer) {
        throw new NotFoundError('Payer');
      }
      if (payer.type === UserType.SHOPKEEPER) {
        throw new OperationNotAllowedError(payer.type);
      }
      if (payer.balance < value) {
        throw new InsufficientBalanceError();
      }
      const payee = await repo.findOne({
        where: { document: dto.payee.value },
        withDeleted: false,
      });
      if (!payee) {
        throw new NotFoundError('Payee');
      }
      await this.authorize();
      payer.balance -= value;
      payee.balance += value;
      await manager.save([payee, payer]);
      await this.notify(3);
    });
  }
  async deposit(dto: DepositDto): Promise<void> {
    const user = await this.repo.findOne({
      where: { document: dto.document.value },
      withDeleted: false,
    });
    if (!user) {
      throw new NotFoundError('User');
    }
    user.balance += Number(dto.amount.value);
    await this.repo.save(user);
  }
}
