import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from '../prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDocumentDto) {
    try {
      return await this.prisma.document.create({ data });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException('Documento já existe', HttpStatus.CONFLICT);
      } else {
        throw new HttpException('Falha ao criar documento', HttpStatus.FORBIDDEN);
      }
    }
  }

  async findAll() {
    try {
      return await this.prisma.document.findMany();
    } catch (error) {
      if (error.code === 'P2001') {
        throw new HttpException('Nenhum documento encontrado', HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException('Algo de errado na requisição', HttpStatus.BAD_REQUEST);
      }
    }
  }

  async findOne(id: string) {
    if (!isUUID(id)) {
      throw new HttpException('Id inválido', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.prisma.document.findFirstOrThrow({
        where: { id }
      });
    } catch (error) {
      throw new HttpException('Nenhum documento encontrado', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, data: UpdateDocumentDto) {
    const document = await this.prisma.document.findFirst({where: { id }})

    if (!document) {
      throw new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.document.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Falha ao criar documento', HttpStatus.FORBIDDEN);
    }
  }

  async remove(id: string) {
    const document = await this.prisma.document.findFirst({where: { id }})

    if (!document) {
      throw new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.document.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Falha ao apagar documento', HttpStatus.FORBIDDEN);
    }
  }
}
