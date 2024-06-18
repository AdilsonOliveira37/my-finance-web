import { Module } from '@nestjs/common';
import { TransactionTypeService } from './transaction-type.service';
import { TransactionTypeController } from './transaction-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionType } from './entities/transaction-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionType])],
  controllers: [TransactionTypeController],
  providers: [TransactionTypeService],
})
export class TransactionTypeModule {}
