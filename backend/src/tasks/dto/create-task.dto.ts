import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUUID } from "class-validator"

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  @IsString()
  inputDescription: string

  @ApiProperty()
  @IsString()
  outputDescription: string

  @ApiProperty()
  @IsString()
  exampleInput: string

  @ApiProperty()
  @IsString()
  exampleOutput: string

  @ApiProperty()
  @IsUUID()
  tasklistId: string
}
