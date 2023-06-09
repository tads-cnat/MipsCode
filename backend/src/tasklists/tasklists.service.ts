import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class TasklistsService {
  constructor(private prisma: PrismaService) {}

  async create(createTasklistDto: CreateTasklistDto) {
    const { name, classroomId, professorId } = createTasklistDto;
    
    await this.prisma.classroom.findFirstOrThrow({
      where: {
        id: classroomId,
        professorId: professorId,
      },
    });

    return this.prisma.tasklist.create({
      data: {
        name: name,
        Classroom: {
          connect: {
            id: classroomId
          }
        }
      }
    })
  }

  async findAll(classroomId: string) {
    if (!isUUID(classroomId)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    const classroom = await this.prisma.classroom.findFirstOrThrow({
      where: { id: classroomId },
      include: { tasklists: true }
    })

    return classroom.tasklists
  }

  findOne(id: string) {
    if (!isUUID(id)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.tasklist.findFirstOrThrow({
      where: { id }
    });
  }

  async update(id: string, updateTasklistDto: UpdateTasklistDto, requestUserId: string) {
    if (!isUUID(id)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    const tasklist = await this.prisma.tasklist.findFirstOrThrow({
      where: {
        id
      },
      include: {
        Classroom: {
          select: {
            professorId: true
          }
        }
      }
    })

    if (tasklist.Classroom.professorId !== requestUserId) {
      throw new HttpException('Unauthorized professor access', HttpStatus.UNAUTHORIZED);
    }

    try {
      return await this.prisma.tasklist.update({
        data: updateTasklistDto,
        where: {
          id,
        }
      })
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException("Tasklist not found", HttpStatus.NOT_FOUND);
      } else if (error.code === 'P2002') {
        throw new HttpException("This Tasklist already exists", HttpStatus.CONFLICT);
      } else {
        throw new HttpException("Can't update Tasklist.", HttpStatus.FORBIDDEN);
      }
    }
  }

  async remove(id: string, requestUserId: string) {
    if (!isUUID(id)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    const tasklist = await this.prisma.tasklist.findFirstOrThrow({
      where: {
        id
      },
      include: {
        Classroom: {
          select: {
            professorId: true
          }
        }
      }
    })

    if (tasklist.Classroom.professorId !== requestUserId) {
      throw new HttpException('Unauthorized professor access', HttpStatus.UNAUTHORIZED);
    }

    try {
      return await this.prisma.tasklist.delete({
        where: { id }
      })
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException("Tasklist not found", HttpStatus.NOT_FOUND);
      } else if (error.code === 'P2002') {
        throw new HttpException("This Tasklist already exists", HttpStatus.CONFLICT);
      } else {
        throw new HttpException("Can't update Tasklist.", HttpStatus.FORBIDDEN);
      }
    }
  }
}
