import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDocumentDto) {
    try {
      const documentExists = await this.prisma.document.findFirst({
        where: {
          title: data.title,
        },
      });
      //caso ja exista um topico da documentação com esse nome , retorne um erro
      if (documentExists) {
        throw new Error('documento ja existente');
      }

      return this.prisma.document.create({ data: data });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Documento ja inserido na documentação',
        },
        HttpStatus.CONFLICT,
        {
          cause: error,
        },
      );
    }
  }

  async findAll() {
    try {
      return this.prisma.document.findMany();
    } catch (error) {
      // caso ele tente listar uma lista vazia na API
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum documento encontrado na documentação',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.document.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      // caso ele tente listar uma lista vazia na API
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum documento encontrado na documentação',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async update(id: string, data: UpdateDocumentDto) {
    try {
      const documentExists = await this.prisma.document.findUnique({
        where: {
          id: id,
        },
      });

      //caso não exista esse documento na base de dados retorne um erro
      if (!documentExists) {
        throw new Error('documento não encontrado ');
      }

      return await this.prisma.document.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'documento não encontrado ',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async remove(id: string) {
    try {
      const documentExists = await this.prisma.document.findUnique({
        where: {
          id: id,
        },
      });

      //caso não exista esse documento na base de dados retorne um erro
      if (!documentExists) {
        throw new Error('documento não encontrado ');
      }

      return await this.prisma.document.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'documento não encontrado ',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
