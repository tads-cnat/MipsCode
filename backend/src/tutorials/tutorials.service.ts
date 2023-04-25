import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TutorialsService {
  constructor(private prisma: PrismaService) {}

  create(createTutorialDto: CreateTutorialDto) {
    return 'This action adds a new tutorial';
  }

  async findAll() {
    try {
      return await this.prisma.tutorial.findMany();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum Tutorial Encontrado',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async findAllFromUser(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { Tutorial: true }
      });

      return user.Tutorial
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum Tutorial Encontrado',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  findOne(id: string) {
    return this.prisma.tutorial.findUnique({ where: { id } });
  }

  async findOneFromUser(id: string, userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId }, 
        include: { Tutorial: true }
      });

      return user.Tutorial.find(project => project.id === id);

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum Tutorial Encontrado',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async update(id: string, updateTutorialDto: UpdateTutorialDto) {
    try {
      const tutorial = await this.prisma.tutorial.findUnique({
        where: { id } 
      });

      if (!tutorial) {
        throw new Error('Tutorial Não Existe');
      }

      return await this.prisma.tutorial.update({
        data: updateTutorialDto,
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

  async updateFromUser(id: string, updateTutorialDto: UpdateTutorialDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: updateTutorialDto.userId }, 
        include: { Tutorial: true }
      });

      const tutorial = user.Tutorial.find(tutorial => tutorial.id === id);

      if (!tutorial) {
        throw new Error('Tutorial Não Existe');
      }

      return await this.prisma.tutorial.update({
        data: updateTutorialDto,
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

  remove(id: string) {
    return `This action removes a #${id} tutorial`;
  }
}
