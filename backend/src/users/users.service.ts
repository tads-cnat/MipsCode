import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.prisma.user.create({ data: createUserDto });
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async updateUser(userId: number, userData: Partial<User>): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: userData,
    });
    return updatedUser;
  }

  async deleteUser(userId: number): Promise<User> {
    const deletedUser = await this.prisma.user.delete({ where: { id: userId } });
    return deletedUser;
  }
}
