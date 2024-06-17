import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Relation,
  JoinColumn,
} from 'typeorm';

@Entity('tb_transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @ManyToOne(() => TransactionType, (transaction) => transaction, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'transaction_type_id', referencedColumnName: 'id' }])
  transactionType: Relation<TransactionType>;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
