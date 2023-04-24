import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { retry } from 'rxjs';

@Injectable()
export class ProjectsService {
  //construtor para poder usar o primsa Service
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectDto) {
    try {
      return this.prisma.project.create({ data: data });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Projeto não possui ',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.project.findMany();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum Projeto Encontrado',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: string, data: UpdateProjectDto) {
    try {
      const projectExist = await this.prisma.project.findUnique({
        where: {
          id,
        },
      });

      if (!projectExist) {
        throw new Error('Projeto Não Existe');
      }

      return await this.prisma.project.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Infelizmente algo deu Errado',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async remove(id: string) {
    try {
      const projectExists = await this.prisma.project.findUnique({
        where: {
          id,
        },
      });

      if (!projectExists) {
        throw new Error('Projeto Não encontrado ');
      }

      return await this.prisma.project.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Infelizmente algo deu Errado',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
