import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { retry } from 'rxjs';
import { isUUID } from 'class-validator';

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
    if (!isUUID(userId)) {
      throw new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { project: true },
    });

    if (!user || user.id !== userId) {
      throw new HttpException('Acesso não autorizado', HttpStatus.UNAUTHORIZED);
    }

    if (!user.project || user.project.length === 0) {
      throw new HttpException('Nenhum projeto não encontrado', HttpStatus.NOT_FOUND);
    }

    return user.project
  }

  async findOne(id: string, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { project: true },
    });

    const project = user.project.find((project) => project.id === id);

    if (!project) {
      throw new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
    }

    return project
  }

  async update(id: string, data: UpdateProjectDto, userId: string) {
    if (!isUUID(data.userId)) {
      throw new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: data.userId },
      include: { project: true },
    });

    if (!user || user.id !== userId) {
      throw new HttpException('Acesso não autorizado', HttpStatus.UNAUTHORIZED);
    }

    const project = user.project.find((project) => project.id === id);

    if (!project) {
      throw new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.project.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Erro ao atualizar', HttpStatus.FORBIDDEN);
    }
  }

  async remove(id: string, userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { project: true },
      });

      const project = user.project.find((project) => project.id === id);

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
