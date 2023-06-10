import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async create(classData: CreateClassDto) {
    //código de 8 digitos da turma
    function generateCode(): string {
      let resultado = '';

      for (let i = 0; i < 6; i++) {
        const randomCharCode = Math.floor(Math.random() * 36);
        const char = String.fromCharCode(
          randomCharCode < 26 ? randomCharCode + 65 : randomCharCode + 22,
        );
        resultado += char;
      }

      return resultado;
    }

    try {
      classData.cod = generateCode();

      const userRes = await this.prisma.user.findFirst({
        where: { id: classData.professorId },
      });

      //caso não seja um professor ele recebe um erro de Unauthorized
      if (userRes.role != 'professor') {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      classData.cod = generateCode();

      return await this.prisma.class.create({ classData }); // erro ao criar turma
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.prisma.class.findMany();
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
