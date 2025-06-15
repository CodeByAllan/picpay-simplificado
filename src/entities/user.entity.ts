import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../types/user-type.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  firstname!: string;
  @Column()
  lastname!: string;
  @Column({ unique: true })
  email!: string;
  @Column({ unique: true })
  document!: string;
  @Column()
  password!: string;
  @Column({ type: 'enum', enum: UserType })
  type!: UserType;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => Number(value),
    },
  })
  balance!: number;
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
  @DeleteDateColumn()
  deletedAt!: Date;
}
