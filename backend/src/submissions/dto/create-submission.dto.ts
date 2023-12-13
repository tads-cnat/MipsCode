import { IsString, IsUUID } from "class-validator"

export class CreateSubmissionDto {
  @IsString()
  answer: string

  @IsUUID()
  userId: string

  @IsUUID()
  taskId: string

  @IsUUID()
  tasklistId: string
}
