import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  description: string;

  @ApiProperty({ required: true })
  @IsString()
  content: string;

  @ApiProperty({ required: true })
  @IsString()
  userId: string;
}
