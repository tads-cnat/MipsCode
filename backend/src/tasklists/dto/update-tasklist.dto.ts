import { PartialType } from '@nestjs/swagger';
import { CreateTasklistDto } from './create-tasklist.dto';

export class UpdateTasklistDto extends PartialType(CreateTasklistDto) {}
