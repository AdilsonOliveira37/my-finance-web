import { Module, forwardRef } from '@nestjs/common';
import { TransactionTypeService } from './transaction-type.service';
import { TransactionTypeController } from './transaction-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionType } from './entities/transaction-type.entity';
import { TransactionModule } from 'src/transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionType]),
    forwardRef(() => TransactionModule),
  ],
  controllers: [TransactionTypeController],
  providers: [TransactionTypeService],
  exports: [TransactionTypeService],
})
export class TransactionTypeModule {}
