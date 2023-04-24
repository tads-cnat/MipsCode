import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDocumentDto } from './create-document.dto';
import { IsString } from 'class-validator';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @ApiProperty({ required: false })
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;
}
