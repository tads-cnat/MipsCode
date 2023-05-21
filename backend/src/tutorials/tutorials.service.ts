import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class TutorialsService {
  constructor(private prisma: PrismaService) {}

  async create(createTutorialDto: CreateTutorialDto) {
    try {
      return await this.prisma.tutorial.create({ data: createTutorialDto });

    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException('Tutorial already exists', HttpStatus.CONFLICT);
      } else {
        throw new HttpException('failed to create tutorial', HttpStatus.FORBIDDEN);
      }
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
    if (!isUUID(id)) {
      throw new HttpException('Invalid id', HttpStatus.FORBIDDEN);
    }

    try {
      return await this.prisma.tutorial.findUnique({ where: { id } });

    } catch (error) {
      throw new HttpException('Tutorial not found', HttpStatus.NOT_FOUND);
    }
  }

  async findAllByAuthor(userId: string) {
    try {
      return await this.prisma.tutorial.findMany({
        where: { userId }
      });
    } catch (error) {
      if (error.code === 'P2001') {
        throw new HttpException('No tutorial found', HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException('Something gone wrong', HttpStatus.BAD_REQUEST);
      }    }
  }

  async findOneByAuthor(id: string, userId: string) {
    try {
      return await this.prisma.tutorial.findFirstOrThrow({
        where: { id, userId }
      });
    } catch (error) {
      throw new HttpException('Tutorial not found', HttpStatus.NOT_FOUND);
    }
  }

  async updateAnAuthorTutorial(id: string, updateTutorialDto: UpdateTutorialDto, userId: string) {
    const tutorial = await this.prisma.tutorial.findFirst({ where: { id, userId } });
  
    if (!tutorial) {
      throw new HttpException('Tutorial not found', HttpStatus.NOT_FOUND);
    }
  
    try {
      return await this.prisma.tutorial.update({
        data: updateTutorialDto,
        where: { id }
      });
    } catch (error) {
      throw new HttpException('failed to update tutorial', HttpStatus.FORBIDDEN);
    }
  }

  async removeAnAuthorTutorial(id: string, userId: string) {
    const tutorial = await this.prisma.tutorial.findFirst({ where: { id, userId } });
  
    if (!tutorial) {
      throw new HttpException('Tutorial not found', HttpStatus.NOT_FOUND);
    }
  
    try {
      return await this.prisma.tutorial.delete({
        where: { id }
      });
    } catch (error) {
      throw new HttpException('failed to delete tutorial', HttpStatus.FORBIDDEN);
    }
  }
}
