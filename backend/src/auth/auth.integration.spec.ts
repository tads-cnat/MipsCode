import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, JwtService],
      imports: [
        JwtModule.register({
          secret: 'ke9E1Lk56fzz1B',
        }),
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    const createUserDto: CreateUserDto = {
      name: 'User',
      email: 'user@email.com',
      password: '123456',
      role: 'STUDENT',
    };

    it('should create a user', async () => {
      const result = await service.register(createUserDto);
      expect(result).toBeDefined();
    });

    it('should throw an error if user already exists', async () => {
      await expect(service.register(createUserDto)).rejects.toThrow(
        new HttpException('Usuário já existe', HttpStatus.CONFLICT),
      );
    });
  });

  describe('login', () => {
    const login: LoginDto = {
      email: 'user@email.com',
      password: '123456',
    };

    it('should login a user', async () => {
      const result = await service.login(login.email, login.password);
      expect(result).toBeDefined();
    });

    it('should throw an error if user does not exists', async () => {
      await expect(service.login('invalido@email.com', 'invalido')).rejects.toThrow(
        new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });
});