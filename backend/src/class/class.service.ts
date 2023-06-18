import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ManageStudent } from './dto/manage-student-dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClassDto) {
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
      data.cod = generateCode();

      const userRes = await this.prisma.user.findFirst({
        where: { id: data.professorId },
      });

      //caso não seja um professor ele recebe um erro de Unau thorized
      if (userRes.role != 'PROFESSOR') {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      return await this.prisma.class.create({ data });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.prisma.class.findMany();
  }

  async findOne(cod: string) {
    try {
      const classRes = await this.prisma.class.findFirst({
        where: { cod: cod },
        include: {
          professor: {
            select: {
              name: true,
              avatar: true,
            },
          },
          students: {
            select: {
              name: true,
              avatar: true,
              id: true,
            },
          },
          tasklists: {},
        },
      });
      return classRes;
    } catch (error) {
      return 'um erro aconteceu';
    }
  }

  async update(cod: string, updateClassDto: UpdateClassDto) {
    try {
      const classexist = await this.prisma.class.findFirst({
        where: { cod: cod },
      });

      if (!classexist) {
        throw new HttpException('Turma não encontrada ', HttpStatus.NOT_FOUND);
      }

      const isProfessor = await this.prisma.user.findFirst({
        where: { id: updateClassDto.professorId },
      });

      if (isProfessor.role == 'student') {
        throw new HttpException('Não autorizado ', HttpStatus.UNAUTHORIZED);
      }

      return await this.prisma.class.update({
        where: { cod: cod },
        data: {
          className: updateClassDto.className,
          classDescription: updateClassDto.classDescription,
        },
      });
    } catch (error) {
      return {
        err: error,
      };
    }
  }

  async addStudent(cod: string, addstudent: ManageStudent) {
    const id = addstudent.userId;

    try {
      //checar se o usuario existe
      const userRes = await this.prisma.user.findFirst({ where: { id } });

      //checar se o usuario existe
      if (!userRes) {
        throw new HttpException(
          'Usuario não existente nessa turma ',
          HttpStatus.NOT_FOUND,
        );
      }

      //checar se a turma existe
      const classRes = await this.prisma.class.findFirst({
        where: { cod: cod },
      });

      if (!classRes) {
        throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.class.update({
        where: { cod: cod },
        data: {
          students: {
            connect: { id: id },
          },
        },
      });
    } catch (error) {
      return {
        err: error,
      };
    }
  }

  async removeStudent(cod: string, removeStudent: ManageStudent) {
    const id = removeStudent.userId;

    try {
      //checar se o usuario existe
      const userRes = await this.prisma.user.findFirst({ where: { id } });

      //checar se o usuario é um estudante
      if (userRes.role == 'professor') {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      //checar se a turma existe
      const classRes = await this.prisma.class.findFirst({
        where: { cod: cod },
      });

      if (!classRes) {
        throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND);
      }

      //checar se o estudante ja está inserido naquela turma
      const studentinClass = await this.prisma.class.findFirst({
        where: { cod: cod },
        include: {
          students: {
            select: {
              id: true,
            },
          },
        },
      });

      if (studentinClass.students.includes({ id })) {
        throw new HttpException('Aluno ja Cadastrado', HttpStatus.CONFLICT);
      }

      return await this.prisma.class.update({
        where: { cod: cod },
        data: {
          students: {
            disconnect: { id: id },
          },
        },
      });
    } catch (error) {
      return {
        err: error,
      };
    }
  }

  async remove(cod: string, professorid: string) {
    try {
      const isProfessor = await this.prisma.user.findFirst({
        where: { id: professorid },
      });

      if (isProfessor.role == 'student') {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      const classExist = await this.prisma.class.findFirst({
        where: { cod: cod },
      });
      if (!classExist) {
        throw new HttpException('Turma Não econtrada', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.class.delete({ where: { cod } });
    } catch (error) {
      return {
        err: error,
      };
    }
  }
}
