import { ApiProperty } from '@nestjs/swagger';

export class ClassEntity {
  @ApiProperty()
  ClassId: string;
  Classname: string;
}
