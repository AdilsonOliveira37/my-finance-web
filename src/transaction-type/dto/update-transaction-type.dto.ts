import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionTypeDto } from './create-transaction-type.dto';
import { IsString } from 'class-validator';

export class UpdateTransactionTypeDto extends PartialType(
  CreateTransactionTypeDto,
) {
  @IsString()
  readonly description?: string;

  @IsString()
  readonly type?: string;
}
