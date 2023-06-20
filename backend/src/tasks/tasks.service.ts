import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto, userId: string) {
    const tasklist = await this.prisma.tasklist.findFirstOrThrow({
      where: {
        id: createTaskDto.tasklistId
      },
      select: {
        Class: {
          select: {
            professorId: true,
          }
        }
      }
    })

    if (tasklist.Class.professorId !== userId) {
      throw new HttpException('Unauthorized professor access', HttpStatus.UNAUTHORIZED);
    }

    return await this.prisma.task.create({ data: createTaskDto })
  }

  async findAllByTasklist(tasklistId: string, userId: string) {
    if (!isUUID(tasklistId)) {
      throw new HttpException('Invalid input id', HttpStatus.FORBIDDEN);
    }

    const { tasks, Class } = await this.prisma.tasklist.findFirstOrThrow({
      where: { id: tasklistId },
      select: {
        tasks: true,
        Class: {
          select: {
            professorId: true,
            students: {
              where: { id: userId }
            }
          },
        }
      }
    });

    if (Class.professorId !== userId && Class.students[0]?.id !== userId) {
      throw new HttpException('Unauthorized user access', HttpStatus.UNAUTHORIZED);
    }

    return tasks
  }

  async findAllByProfessor(professorId: string, userId: string) {
    if (!isUUID(professorId)) {
      throw new HttpException('Invalid input id', HttpStatus.FORBIDDEN);
    }

    if (professorId !== userId) {
      throw new HttpException('Unauthorized user access', HttpStatus.UNAUTHORIZED);
    }

    return await this.prisma.task.findMany({
      where: {
        Tasklist: {
          Class: { professorId }
        }
      }
    });
  }

  async findOne(id: string, userId: string) {
    const task = await this.prisma.task.findFirstOrThrow({
      where: { id },
      include: {
        Tasklist: {
          select: {
            Class: {
              select: {
                professorId: true,
                students: { where: { id: userId } }
              }
            }
          }
        }
      }
    })

    const { professorId, students } = task.Tasklist.Class

    if (professorId !== userId && students[0]?.id !== userId) {
      throw new HttpException('Unauthorized user access', HttpStatus.UNAUTHORIZED);
    }

    return {
      id: task.id,
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: string) {
    return `This action removes a #${id} task`;
  }
}