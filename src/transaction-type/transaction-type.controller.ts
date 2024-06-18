import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TransactionTypeService } from './transaction-type.service';
import { CreateTransactionTypeDto } from './dto/create-transaction-type.dto';
import { UpdateTransactionTypeDto } from './dto/update-transaction-type.dto';

@Controller('transaction-type')
export class TransactionTypeController {
  constructor(
    private readonly transactionTypeService: TransactionTypeService,
  ) {}

  @Post()
  create(@Body() createTransactionTypeDto: CreateTransactionTypeDto) {
    return this.transactionTypeService.create(createTransactionTypeDto);
  }

  @Get()
  findAll() {
    return this.transactionTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionTypeService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTransactionTypeDto: UpdateTransactionTypeDto,
  ) {
    const transactionUpdated = await this.transactionTypeService.findOne(id);

    if (!transactionUpdated) {
      throw new NotFoundException(
        'Não existe um tipo de transação com esse ID.',
      );
    }

    return this.transactionTypeService.update(id, updateTransactionTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const transactionDeleted = await this.transactionTypeService.findOne(id);

    if (!transactionDeleted) {
      throw new NotFoundException(
        'Não existe um tipo de transação com esse ID.',
      );
    }

    return this.transactionTypeService.remove(id);
  }
}
