import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTasklistDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string
}
