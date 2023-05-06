import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TutorialsService {
  constructor(private prisma: PrismaService) {}

  async create(createTutorialDto: CreateTutorialDto) {
    try {
      return await this.prisma.tutorial.create({ data: createTutorialDto });

    } catch (error) {
      throw new HttpException('Already exists', HttpStatus.CONFLICT);
    }
  }

  async findAll() {
    try {
      const tutorials = await this.prisma.tutorial.findMany();
      return tutorials

    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.tutorial.findUnique({ where: { id } });

    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async findAllFromProfessor(userId: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id: userId }, 
        include: { Tutorial: true }
      });
      return user.Tutorial

    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async findOneFromProfessor(id: string, userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { Tutorial: true }
      });
      return user.Tutorial.find(project => project.id === id);

    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async updateProfessorTutorial(id: string, updateTutorialDto: UpdateTutorialDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: updateTutorialDto.userId }, 
        include: { Tutorial: true }
      });

      const tutorial = user.Tutorial.find(tutorial => tutorial.id === id);

      if (!tutorial) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.tutorial.update({
        data: updateTutorialDto,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Something gone wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async removeProfessorTutorial(id: string, userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { Tutorial: true }
      });

      const tutorial = user.Tutorial.find(tutorial => tutorial.id === id);

      if (!tutorial) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.tutorial.delete({
        where: { id }
      })
    } catch (error) {
      throw new HttpException('Something gone wrong', HttpStatus.BAD_REQUEST);
    }
  }
}
