import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClassDto {
  @ApiProperty()
  @IsString()
  professorId: string;

  @ApiProperty()
  @IsString()
  className: string;

  @ApiProperty()
  @IsString()
  classDescription: string;
}
