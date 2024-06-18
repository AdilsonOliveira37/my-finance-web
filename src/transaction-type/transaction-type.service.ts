import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionTypeDto } from './dto/create-transaction-type.dto';
import { UpdateTransactionTypeDto } from './dto/update-transaction-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionType } from './entities/transaction-type.entity';

@Injectable()
export class TransactionTypeService {
  constructor(
    @InjectRepository(TransactionType)
    private transactionTypeRepository: Repository<TransactionType>,
  ) {}

  create(createTransactionTypeDto: CreateTransactionTypeDto) {
    const transactionType = this.transactionTypeRepository.create(
      createTransactionTypeDto,
    );

    return this.transactionTypeRepository.save(transactionType);
  }

  findAll() {
    return this.transactionTypeRepository.find();
  }

  async findOne(id: string) {
    const transactionType = await this.transactionTypeRepository.findOne({
      where: { id },
    });

    if (!transactionType) {
      throw new NotFoundException(
        'Não existe um tipo de transação com esse ID.',
      );
    }

    return transactionType;
  }

  async update(id: string, updateTransactionTypeDto: UpdateTransactionTypeDto) {
    return this.transactionTypeRepository.update(id, updateTransactionTypeDto);
  }

  async remove(id: string) {
    await this.transactionTypeRepository.delete(id);

    return { message: 'Tipo de transação deletado com sucesso.' };
  }
}
