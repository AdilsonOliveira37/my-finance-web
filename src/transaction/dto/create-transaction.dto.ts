import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  readonly date: Date;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsUUID()
  readonly transactionTypeId: string;
}
