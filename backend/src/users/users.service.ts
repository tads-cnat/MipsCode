import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { roundsOfHashing } from '../auth/auth.service';

//export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // async createUser(createUserDto: CreateUserDto): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(
  //     createUserDto.password,
  //     roundsOfHashing,
  //   );

  //   const createdUser = await this.prisma.user.create({
  //     data: {
  //       ...createUserDto,
  //       password: hashedPassword
  //     },
  //   });

  //   return createdUser;
  // }

  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const userRes = await this.prisma.user.findUnique({ where: { id } });

      if (!userRes) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }

      if (userRes.role == 'professor') {
        return await this.prisma.user.findUnique({
          where: { id },
          include: {
            professorClass: true,
            studentClassrom: true,
            project: true,
            Tutorial: true,
          },
        });
      }

      return await this.prisma.user.findUnique({
        where: { id },
        include: {
          studentClassrom: true,
          professorClass: false,
          project: true,
          Tutorial: true,
        },
      });
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
    userId: string,
  ): Promise<User> {
    if (id !== userId) {
      throw new UnauthorizedException();
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new HttpException('failed to update user', HttpStatus.FORBIDDEN);
    }
  }

  async deleteUser(id: string, userId: string): Promise<User> {
    if (id !== userId) {
      throw new UnauthorizedException();
    }

    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.user.delete({
        where: { id: userId },
      });
    } catch (error) {
      throw new HttpException(
        'failed to delete tutorial',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
