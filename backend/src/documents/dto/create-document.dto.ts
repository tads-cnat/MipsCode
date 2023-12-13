import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;
}
