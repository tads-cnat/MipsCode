import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export const roundsOfHashing = 10;

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    try {
      return await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      });
    } catch (error) {
      throw new ForbiddenException("Can't create user");
    }
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    const userData = await this.prisma.user.findUnique({
      where: { email: email },
      select: {
        name: true,
        id: true,
        email: true,
        avatar: true,
        bio: true,
        role: true,
        password: false,
        Tutorial: true,
        project: true,
        ide_theme: true,
        classroomId: true,
        professorClassroom: true,
        studentClassrom: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      userData: userData,
    };
  }
}
