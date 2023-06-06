import { Injectable } from '@nestjs/common';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return await this.prisma.tasklist.findMany({
      where: { classroomId }
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} tasklist`;
  }

  update(id: string, updateTasklistDto: UpdateTasklistDto) {
    return `This action updates a #${id} tasklist`;
  }

  remove(id: string) {
    return `This action removes a #${id} tasklist`;
  }
}
