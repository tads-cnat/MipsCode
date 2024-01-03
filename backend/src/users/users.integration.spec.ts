import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('Testes de Integração para Usuários', () => {
    let app;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    describe('Obtendo Todos os Usuários', () => {
        it('Deve Obter todos os Usuários Estando Como Admin', async () => {
            const adminLoginData = {
            email: 'admin@example.com', // precisamos colocar o email de admin
            password: 'adminpassword',
        };

        const adminLoginResponse = await request(app.getHttpServer())
            .post('/auth/login') // Verificar se a rota está correta
            .send(adminLoginData)
            .expect(200);

        const { accessToken } = adminLoginResponse.body;
 
        const getAllUsersResponse = await request(app.getHttpServer())
            .get('/users')
            .set('Authorization', `Bearer ${accessToken}`)
            .expect(200);

        // Verificando se a lista contem os usuários
        expect(getAllUsersResponse.body).toBeInstanceOf(Array);
        expect(getAllUsersResponse.body.length).toBeGreaterThan(0);
        });
    });


    describe('Obter Detalhes de um Usuário', () => {
        it('Deve obter detalhes de um usuário usando o admin', async () => {
            const adminLoginData = {
                email: 'admin@example.com', // Mudar para o email de Admin
                password: 'adminpassword',
            };
      
            const adminLoginResponse = await request(app.getHttpServer())
                .post('/auth/login')
                .send(adminLoginData)
                .expect(200);
      
            const { accessToken } = adminLoginResponse.body;
      
            const userId = 'userTeste1'; // Substituir pelo ID de um usuário válido
            const getUserDetailsResponse = await request(app.getHttpServer())
                .get(`/users/${userId}`)
                .set('Authorization', `Bearer ${accessToken}`)
                .expect(200);
      
            // Verificando se os detalhes do usuário estão corretos
          const userDetails = getUserDetailsResponse.body;
            expect(userDetails).toHaveProperty('id');
            expect(userDetails).toHaveProperty('name');
            expect(userDetails).toHaveProperty('email');
        });
    });


    describe('Atualizando Dados de um Usuário', () => {
        it('Deve Atualizar Dados de um Usuário Autenticado', async () => {
          
            const userLoginData = {
                email: 'usuarioTeste@email.com', // Mudar para um usuário e senha válidos
                password: 'SenhaTeste12345',
            };
      
            const userLoginResponse = await request(app.getHttpServer())
                .post('/auth/login')
                .send(userLoginData)
                .expect(200);
      
            const { accessToken } = userLoginResponse.body;
      
            // Tetnar atualizar os detalhes
            const updatedUserData = {
                name: 'Novo Teste Name',
            };
      
            const updateResponse = await request(app.getHttpServer())
                .patch('/users')
                .set('Authorization', `Bearer ${accessToken}`)
                .send(updatedUserData)
                .expect(200);
      
            // Verificando se os detalhes foram atualizados
            const updatedUserDetails = updateResponse.body;
            expect(updatedUserDetails).toHaveProperty('name', updatedUserData.name);
        });
    });


    describe('Falha na Atualização do Usuário', () => {
        it('Deve Falhar na Atualização de um Usuário', async () => {
            const userLoginData = {
            email: 'usuarioTeste@email.com', 
            password: 'SenhaTeste12345', 
        };
      
        const userLoginResponse = await request(app.getHttpServer())
            .post('/auth/login')
            .send(userLoginData)
            .expect(200);
      
        const { accessToken } = userLoginResponse.body;
      
            // Tentando atualizar os detalhes de Outro Usuário
            const anotherUserId = 'UsuarioTeste54321';
            const updatedUserData = {
                name: 'Novo Teste Nome',
            };
      
        const updateResponse = await request(app.getHttpServer())
            .patch(`/users/${anotherUserId}`)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(updatedUserData)
            .expect(401); // Verifique se uma resposta apropriada é recebida
        });
    });
});