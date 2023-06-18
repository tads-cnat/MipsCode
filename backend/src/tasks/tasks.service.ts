import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto, requestUserId: string) {
    const classroom = await this.prisma.class.findFirst({
      where: { professorId: requestUserId },
      include: {
        tasklists: {
          where: {
            id: createTaskDto.tasklistId
          }
        }
      }
    })

    if (!classroom?.tasklists) {
      throw new HttpException('Unauthorized professor access', HttpStatus.UNAUTHORIZED);
    }

    return await this.prisma.task.create({
      data: createTaskDto,
    });
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
