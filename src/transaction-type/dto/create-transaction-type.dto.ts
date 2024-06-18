import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransactionTypeDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;
}
