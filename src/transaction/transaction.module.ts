import { Module, forwardRef } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import { TransactionTypeModule } from 'src/transaction-type/transaction-type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, TransactionType]),
    forwardRef(() => TransactionTypeModule),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}
