import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateClassDto {
  @ApiProperty()
  @IsString()
  professorId: string;

  @ApiProperty()
  @IsString()
  className: string;

  @ApiProperty()
  @IsString()
  classDescription: string;

  // @ApiProperty()
  // @IsString()
  // cod: string;
}
