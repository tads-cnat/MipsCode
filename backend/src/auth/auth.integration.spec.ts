import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppModule } from 'src/app.module';

describe('Authentication Integration Tests', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Registro de usuário', () => {
    it('should register a new user', async () =>{
      const userData = {
        email: 'testuser@example.com',
        password: 'password123',
        name: 'Test User',
        role: 'user',
      };

      const response = await request(app.getHttpServer())
        .post('/cadastro') // confirmar se essa realmente é a rota para registro
        .send(userData)
        .expect(201); 

        // Verificando se o usuário foi criado
        const createdUser = await prismaService.user.findUnique({
            where: { id: response.body.id },
        });
        expect(createdUser).toBeDefined();

        // Verifique se a senha está como hash
        expect(createdUser.password).not.toEqual(userData.password);
        });
    });


    describe('User Login', () => {
        it('deve fazer login e retornar um token', async () => {
          // Cria um usuário de teste usando a rota de registro
          const userData = {
            email: 'testuser@example.com',
            password: 'password123',
            name: 'Test User',
            role: 'user',
          };
    
          await request(app.getHttpServer())
            .post('/cadastro') // verificar se está é a rota certa
            .send(userData)
            .expect(201);
    
          // Faça login com as credenciais do usuário
          const loginData = {
            email: userData.email,
            password: userData.password,
          };
    
          const loginResponse = await request(app.getHttpServer())
            .post('/auth/login')
            .send(loginData)
            .expect(200);
    
          // Verifica se o token de acesso é retornado
          const accessToken = loginResponse.body.accessToken;
          expect(accessToken).toBeDefined();
        });
    });


    describe('Falha no Login de Usuário', () => {
        it('Deverá falhar no login com as credenciais inválidas', async () => {
          // Tentando fazer login com credenciais inválidas
          const invalidLoginData = {
            email: 'EmailSemDominioArrobaEmailPontoComPontoBR',
            password: 'SenhaIncorreta',
          };
    
          const loginResponse = await request(app.getHttpServer())
            .post('/auth/login') // Confirmar se a rota está correta
            .send(invalidLoginData)
            .expect(401); // Verificar se a resposta está apropriada
        });
      });
    });