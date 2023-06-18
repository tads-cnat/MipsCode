import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class TasklistsService {
  constructor(private prisma: PrismaService) {}

  async create(createTasklistDto: CreateTasklistDto, requestUserId: string) {
    if (createTasklistDto.professorId !== requestUserId) {
      throw new HttpException('Unauthorized professor access', HttpStatus.UNAUTHORIZED);
    }

    const { name, classId, professorId } = createTasklistDto;
    
    await this.prisma.class.findFirstOrThrow({
      where: {
        id: classId,
        professorId: professorId,
      },
    });

    return this.prisma.tasklist.create({
      data: {
        name: name,
        Class: {
          connect: {
            id: classId
          }
        }
      }
    })
  }

  async findAll(classId: string, userId: string, userRole: string) {
    if (!isUUID(classId)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    const searchedClass = await this.prisma.class.findFirstOrThrow({
      where: { id: classId },
      select: {
        tasklists: true,
        students: {
          where: {
            id: userId
          },
          take: 1
        },
        professorId: true
      }
    })

    if (userRole === 'STUDENT' && searchedClass.students.length === 0) {
      throw new HttpException("Unauthorized student access", HttpStatus.UNAUTHORIZED);
    }

    if (userRole === 'PROFESSOR' && searchedClass.professorId !== userId) {
      throw new HttpException("Unauthorized professor access", HttpStatus.NOT_FOUND);
    }

    return searchedClass.tasklists
  }

  async findOne(
    tasklistId: string, 
    userId: string, 
    userRole: string
    ) {
    if (!isUUID(tasklistId)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    const tasklist = await this.prisma.tasklist.findFirstOrThrow({
      where: {
        id: tasklistId
      },
      include: {
        Class: {
          select: {
            professorId: true,
            students: {
              where: {
                id: userId
              },
              take: 1
            }
          }
        },
        tasks: true
      }
    })

    if (userRole === 'STUDENT' && tasklist.Class.students.length === 0) {
      throw new HttpException("Unauthorized student access", HttpStatus.UNAUTHORIZED);
    }

    if (userRole === 'PROFESSOR' && tasklist.Class.professorId !== userId) {
      throw new HttpException("Unauthorized professor access", HttpStatus.UNAUTHORIZED);
    }

    return {
      id: tasklist.id,
      name: tasklist.name,
      description: tasklist.description,
      classId: tasklist.classId,
      createdAt: tasklist.createdAt,
      updatedAt: tasklist.updatedAt,
      tasks: tasklist.tasks
    }
  }

  async update(
    tasklistId: string,
    updateTasklistDto: UpdateTasklistDto,
    userId: string
    ) {
    if (!isUUID(tasklistId)) {
      throw new HttpException('Invalid input id', HttpStatus.BAD_REQUEST);
    }

    const tasklist = await this.prisma.tasklist.findFirstOrThrow({
      where: {
        id: tasklistId
      },
      include: {
        Class: {
          select: {
            professorId: true
          }
        }
      }
    })

    if (tasklist.Class.professorId !== userId) {
      throw new HttpException("Unauthorized professor access", HttpStatus.UNAUTHORIZED);
    }

    try {
      return await this.prisma.tasklist.update({
        data: updateTasklistDto,
        where: {
          id: tasklistId,
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
        Class: {
          select: {
            professorId: true
          }
        }
      }
    })

    if (tasklist.Class.professorId !== requestUserId) {
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
