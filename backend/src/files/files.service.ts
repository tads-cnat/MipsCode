import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';
import { isUUID } from 'class-validator';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) { }

  async create(file: Express.Multer.File, req: Request, userId: string) {
    if (!isUUID(userId)) {
      throw new HttpException('Id inválido', HttpStatus.FORBIDDEN);
    }

    const createFileDto: CreateFileDto = {
      fileName: file.filename,
      contentLength: file.size,
      contentType: file.mimetype,
      path: `${req.protocol}://${req.get('host')}/files/${file.filename}`,
      userId
    }

    try {
      return await this.prisma.photo.create({
        data: createFileDto
      })
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException(
          'Nenhum projeto encontrado',
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw new HttpException('Falha ao criar foto', HttpStatus.FORBIDDEN);
      }
    };
  }
}
