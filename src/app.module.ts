import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionTypeModule } from './transaction-type/transaction-type.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TransactionsModule, TransactionTypeModule],
})
export class AppModule {}
