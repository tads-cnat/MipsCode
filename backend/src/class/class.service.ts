import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async create(classData: CreateClassDto) {
    try {
      const UserRole = await this.prisma.user.findFirst({
        where: { id: classData.professorId },
      });
      if (UserRole.role != 'professor') {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      const classRes = await this.prisma.classroom.create(classData);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.prisma.classroom.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
