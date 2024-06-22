import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Relation,
  JoinColumn,
  DeleteDateColumn,
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

  @Column({ type: 'date', name: 'date' })
  date: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
