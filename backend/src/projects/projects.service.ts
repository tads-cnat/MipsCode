import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.prisma.project.create({
      data: {
        title: createProjectDto.title,
        description: createProjectDto.description,
        favorite: createProjectDto.favorite,
        content: createProjectDto.content,
        author: {
          connect: { id: createProjectDto.userId },
        },
      },
    });
  }

  async findAll(userId: number): Promise<Project[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        userId,
      },
    });

    if (!projects) {} // TODO: tratar valor nulo

    return projects;
  }

  async findOne(id: number): Promise<Project> { // TODO: encontrar projeto pelo id e userId
    return this.prisma.project.findUnique({ where: { id } }) 
  }

  update(id: number, updateProjectDto: UpdateProjectDto) { // TODO: encontrar projeto pelo id e userId
    return this.prisma.project.update({ where: { id }, data: updateProjectDto })
  }

  remove(id: number) { // TODO: encontrar projeto pelo id e userId
    return this.prisma.project.delete({ where: { id } });
  }
}
