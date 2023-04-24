import { UserRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  name: string;

  //@ApiProperty()
  @IsOptional()
  @Length(1, 300)
  bio?: string;

  //@ApiProperty()
  @IsOptional()
  avatar?: string;

  @ApiProperty()
  role: UserRole;

  //@ApiProperty()
  ide_theme?: boolean;
}
