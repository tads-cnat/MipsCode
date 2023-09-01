import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
  Req
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from './multer-config';
import { Request } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post(':userId')
  @UseInterceptors(FileInterceptor('photo', multerConfig))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
    @Req() req: Request,
  ) {
    return this.filesService.create(file, req, userId);
  }
}
