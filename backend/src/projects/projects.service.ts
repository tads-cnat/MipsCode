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

  async findAll(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { project: true }
      });

      return user.project
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

  async findOne(id: string, userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { project: true }
      });

      return user.project.find(project => project.id === id);

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

  async update(id: string, data: UpdateProjectDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: data.userId }, 
        include: { project: true }
      });

      const project = user.project.find(project => project.id === id);

      if (!project) {
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

  async remove(id: string, userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { project: true }
      });

      const project = user.project.find(project => project.id === id);

      if (!project) {
        throw new Error('Projeto Não Existe');
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
