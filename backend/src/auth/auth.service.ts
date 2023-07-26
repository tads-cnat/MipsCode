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
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';

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

  async login(loginDto: LoginDto): Promise<AuthEntity> {
    let suapToken: string
    let user: User
    let userData: any

    if (loginDto.registration) {
      suapToken = await this.suap(loginDto.registration, loginDto.password)
      user = await this.prisma.user.findUnique({ where: { registration: loginDto.registration } });
      userData = await this.prisma.user.findUnique({
        where: { registration: loginDto.registration },
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
          ClassId: true,
          professorClass: true,
          studentClassrom: true,
        },
      });
    } else {
      user = await this.prisma.user.findUnique({ where: { email: loginDto.email } });
      userData = await this.prisma.user.findUnique({
        where: { email: loginDto.email },
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
          ClassId: true,
          professorClass: true,
          studentClassrom: true,
        },
      });
    }


    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      userData: userData,
    };
  }

  async suap(registration: string, password: string) {
    const tokens = await fetch('https://suap.ifrn.edu.br/api/v2/autenticacao/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: registration,
        password
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição.');
      }
      return response.json();
    })

    return tokens.access
  }

  async getDataBySuap() {}
}
