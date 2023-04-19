import { ApiProperty } from '@nestjs/swagger';

export class Project {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    content: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
