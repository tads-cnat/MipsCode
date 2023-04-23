import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateProjectDto {
    
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    description?: string;
    
    @ApiProperty({ required: false, default: false })
    favorite?: boolean = false;
    
    @ApiProperty()
    @IsString()
    content?: string;
    
    @ApiProperty()
    userId: number;
}
