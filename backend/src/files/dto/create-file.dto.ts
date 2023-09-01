import { IsNumber, IsString, IsUUID } from "class-validator"

export class CreateFileDto {

    @IsString()
    fileName: string

    @IsNumber()
    contentLength: number

    @IsString()
    contentType: string

    @IsString()
    path: string

    @IsUUID()
    userId: string
}
