import { Transaction } from 'src/transaction/entities/transaction.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

@Entity('tb_transaction_type')
export class TransactionType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date | null;

  @OneToMany(() => Transaction, (transaction) => transaction.transactionType)
  transactions: Transaction[];
}
