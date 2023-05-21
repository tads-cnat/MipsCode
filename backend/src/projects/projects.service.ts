import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectDto) {
    if (!isUUID(data.userId)) {
      throw new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);
    }

    try {
      return await this.prisma.project.create({ data });
    } catch (error) {
      throw new HttpException('Falha ao criar projeto', HttpStatus.FORBIDDEN);
    }
  }

  async findAll(userId: string) {
    try {
      return await this.prisma.project.findMany({
        where: { userId }
      });
    } catch (error) {
      if (error.code === 'P2001') {
        throw new HttpException('Nenhum projeto encontrado', HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException('Algo de errado na requisição', HttpStatus.BAD_REQUEST);
      }
    }
  }

  async findOne(id: string, userId: string) {
    if (!isUUID(id)) {
      throw new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);
    }

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
  
    const project = await this.prisma.project.findFirst({ where: { id, userId } });
  
    if (!project) {
      throw new HttpException('Nenhum projeto encontrado', HttpStatus.NOT_FOUND);
    }
  
    try {
      return await this.prisma.project.update({
        data,
        where: { id }
      });
    } catch (error) {
      throw new HttpException('Falha ao atualizar projeto', HttpStatus.FORBIDDEN);
    }
  }

  async remove(id: string, userId: string) {
    const project = await this.prisma.project.findFirst({
      where: { id, userId }
    });

    if (!project) {
      throw new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.project.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Falha ao remover projeto.', HttpStatus.FORBIDDEN);
    }
  }
}
