import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateClassDto {
  @ApiProperty()
  @IsString()
  professorId: string;

  @ApiProperty()
  @IsString()
  className: string;

  //@ApiProperty()

  //@ApiProperty()
  @IsOptional()
  @IsString()
  classDescription?: string;
}
