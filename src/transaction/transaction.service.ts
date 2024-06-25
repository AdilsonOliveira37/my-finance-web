import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import { TransactionTypeService } from 'src/transaction-type/transaction-type.service';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,

    @InjectRepository(TransactionType)
    private transactionTypeRepository: Repository<TransactionType>,

    @Inject(forwardRef(() => TransactionTypeService))
    private transactionTypeService: TransactionTypeService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transactionType = await this.transactionTypeRepository.findOne({
      where: { id: createTransactionDto.transactionTypeId },
    });

    if (!transactionType) {
      throw new NotFoundException('Não existe esse tipo de transação.');
    }

    const transaction = this.transactionRepository.create({
      ...createTransactionDto,
      transactionType,
    });

    return this.transactionRepository.save(transaction);
  }

  findAll() {
    return this.transactionRepository.find({ relations: ['transactionType'] });
  }

  async findOne(id: string) {
    const transaction = await this.transactionRepository.findOne({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(
        'Não existe um tipo de transação com esse ID.',
      );
    }

    return transaction;
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const transactionType = await this.transactionTypeRepository.findOne({
      where: { id: updateTransactionDto.transactionTypeId },
    });
    console.log(transactionType);

    await this.transactionRepository.update(id, {
      ...updateTransactionDto,
      transactionType,
    });
    return { message: 'Transação atualizada com sucesso.' };
  }

  async remove(id: string) {
    const transactionType = await this.transactionRepository.findOne({
      where: { id },
    });

    if (!transactionType) {
      throw new NotFoundException('Não existe uma de transação com esse ID.');
    }

    await this.transactionRepository.delete(id);

    return { message: 'Transação deletada com sucesso.' };
  }
}
