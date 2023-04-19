import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProjectDto {
    
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    description: string;
    
    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty({ required: false, default: false })
    favorite?: boolean = false;
}
