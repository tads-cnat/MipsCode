import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../prisma/prisma.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project, User } from '@prisma/client';
import { UpdateProjectDto } from './dto/update-project.dto';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService, PrismaService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    it('should create a project', async () => {
      const data: CreateProjectDto = { 
        title: 'titulo', 
        content: 'addi $2, $0, 5',
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', // id de um usuário válido
        description: 'descrição'
      };

      const result = await service.create(data);

      const expectedResult: Project = {
        content: 'addi $2, $0, 5',
        title: 'titulo',
        description: 'descrição',
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        favorite: false,
        id: result.id,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
      };
      jest.spyOn(prismaService.project, 'create').mockResolvedValue(expectedResult);

      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if the user id is invalid', async () => {
      const data: any = { 
        title: 'titulo', 
        content: 'addi $2, $0, 5',
        userId: 12, // id de um usuário inválido
        description: 'descrição'
      };
      const expectedError = new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);

      try {
        await service.create(data);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('findAll', () => {
    it('should find all projects for a user', async () => {
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841'; // id de um usuário válido
      let expectedResult: Project[];
      jest.spyOn(prismaService.project, 'findMany').mockResolvedValue(expectedResult);

      const result = await service.findAll(userId);

      expect(typeof result).toEqual(typeof expectedResult);
    });
  });

  describe('findOne', () => {
    it('should find a project by id and user id', async () => {
      const user: User & { projects: Project[] } = { 
        id: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        avatar: null,
        bio: null,
        email: null,
        name: null,
        password: null,
        ide_theme: null,
        ClassId: null,
        role: null,
        projects: [
          { 
            id: 'a85690cd-90cd-4c02-bc74-7bb7eca110f3', 
            userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', 
            title: null, 
            content: null, 
            createdAt: null,
            updatedAt: null,
            description: null,
            favorite: false
          },
          {
            id: '63fb7498-10e9-4386-8e16-0292f07b052d',
            userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
            title: null,
            content: null,
            createdAt: null,
            updatedAt: null,
            description: null,
            favorite: false
          },
          {
            id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
            userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
            title: null,
            content: null,
            createdAt: null,
            updatedAt: null,
            description: null,
            favorite: false
          }
        ] 
      };
      const expectedResult: Project = {
        id: '72d01032-83d0-46f8-9074-1a98bfcd9321',
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        title: null,
        content: null,
        createdAt: null,
        updatedAt: null,
        description: null,
        favorite: false
      };
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);

      const id = '72d01032-83d0-46f8-9074-1a98bfcd9321';
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841';

      const result = await service.findOne(id, userId);

      expect(result.id).toEqual(expectedResult.id);
    });

    it('should throw an error if the project is not found', async () => {
      const user: User & { projects: Project[] } = { 
        id: '62d01032-83d0-46f8-9074-1a98bfcd9321',
        avatar: null,
        bio: null,
        email: null,
        name: null,
        password: null,
        ide_theme: null,
        ClassId: null,
        role: null,
        projects: []
      }
      const expectedError = new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);

      const id = '62d01032-83d0-46f8-9074-1a98bfcd9321';
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841';

      try {
        await service.findOne(id, userId);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('should throw an error if the user id is invalid', async () => {
      const id = '456';
      const userId = 'invalid';
      const expectedError = new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);

      try {
        await service.findOne(id, userId);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('update', () => {
    const projects: any = [
      { 
        id: 'a85690cd-90cd-4c02-bc74-7bb7eca110f3', 
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', 
        title: null, 
        content: null, 
        createdAt: null,
        updatedAt: null,
        description: null,
        favorite: false
      },
      {
        id: '63fb7498-10e9-4386-8e16-0292f07b052d',
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        title: null,
        content: null,
        createdAt: null,
        updatedAt: null,
        description: null,
        favorite: false
      },
      {
        id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        title: null,
        content: null,
        createdAt: null,
        updatedAt: null,
        description: null,
        favorite: false
      }
    ]

    it('should update a project by id and user id', async () => {
      const user: User & { projects: Project[] } = { 
        id: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        avatar: null,
        bio: null,
        email: null,
        name: null,
        password: null,
        ide_theme: null,
        ClassId: null,
        role: null,
        projects: [
          { 
            id: 'a85690cd-90cd-4c02-bc74-7bb7eca110f3', 
            userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', 
            title: null, 
            content: null, 
            createdAt: null,
            updatedAt: null,
            description: null,
            favorite: false
          },
          {
            id: '63fb7498-10e9-4386-8e16-0292f07b052d',
            userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
            title: null,
            content: null,
            createdAt: null,
            updatedAt: null,
            description: null,
            favorite: false
          },
          {
            id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
            userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
            title: null,
            content: null,
            createdAt: null,
            updatedAt: null,
            description: null,
            favorite: false
          }
        ] 
      };
      const updateProjectDto: UpdateProjectDto = { title: 'Editado' };
      const expectedResult = {
        id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
        userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
        title: 'Editado',
        content: null,
        createdAt: null,
        updatedAt: null,
        description: null,
        favorite: false
      };
      const id = '72d01032-83d0-46f8-9074-1a98bfcd9321';
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841';
      jest.spyOn(prismaService.user, 'findFirst').mockResolvedValue(user);
      jest.spyOn(prismaService.project, 'update').mockResolvedValue(expectedResult);

      const result = await service.update(id, updateProjectDto, userId);

      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if the project is not found', async () => {
      const projects: any = [
        { 
          id: 'a85690cd-90cd-4c02-bc74-7bb7eca110f3', 
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', 
          title: null, 
          content: null, 
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        },
        {
          id: '63fb7498-10e9-4386-8e16-0292f07b052d',
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
          title: null,
          content: null,
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        },
        {
          id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
          title: null,
          content: null,
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        }
      ]
      const expectedError = new HttpException('Nenhum projeto encontrado', HttpStatus.NOT_FOUND);
      jest.spyOn(prismaService.project, 'findFirst').mockResolvedValue(projects);

      const id = '72d01032-83d0-46f8-9074-1a98bfcd9321';
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841';
      const updateProjectDto: UpdateProjectDto = { title: 'Editado' };

      try {
        await service.update(id, updateProjectDto, userId);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('should throw an error if the user id is invalid', async () => {
      const projects: any = [
        { 
          id: 'a85690cd-90cd-4c02-bc74-7bb7eca110f3', 
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', 
          title: null, 
          content: null, 
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        },
        {
          id: '63fb7498-10e9-4386-8e16-0292f07b052d',
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
          title: null,
          content: null,
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        },
        {
          id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
          title: null,
          content: null,
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        }
      ]
      const expectedError = new HttpException('Id do usuário inválido', HttpStatus.FORBIDDEN);
      jest.spyOn(prismaService.project, 'findFirst').mockResolvedValue(projects);
      const id = '72d01032-83d0-46f8-9074-1a98bfcd9321';
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841';
      const updateProjectDto: UpdateProjectDto = { title: 'Editado' };
      try {
        await service.update(id, updateProjectDto, userId);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('remove', () => {
    it('should remove a project by id and user id', async () => {
      const projects: any = [
        { 
          id: 'a85690cd-90cd-4c02-bc74-7bb7eca110f3', 
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841', 
          title: null, 
          content: null, 
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        },
        {
          id: '63fb7498-10e9-4386-8e16-0292f07b052d',
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
          title: null,
          content: null,
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        },
        {
          id: '72d01032-83d0-46f8-9074-1a98bfcd9323',
          userId: '479a96a8-e8f6-496e-ab2f-33eca04e0841',
          title: null,
          content: null,
          createdAt: null,
          updatedAt: null,
          description: null,
          favorite: false
        }
      ]
      jest.spyOn(prismaService.project, 'findFirst').mockResolvedValue(projects);
      jest.spyOn(prismaService.project, 'delete').mockResolvedValue(projects);
      const id = '72d01032-83d0-46f8-9074-1a98bfcd9321';
      const userId = '479a96a8-e8f6-496e-ab2f-33eca04e0841';

      const result = await service.remove(id, userId);

      expect(result).toEqual(projects);
    });

    // it('should throw an error if the project is not found', async () => {
    //   const id = '456';
    //   const userId = '123';
    //   const expectedError = new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
    //   jest.spyOn(prismaService.project, 'findFirst').mockResolvedValue(null);

    //   try {
    //     await service.remove(id, userId);
    //   } catch (error) {
    //     expect(error).toEqual(expectedError);
    //   }
    // });

    // it('should throw an error if there is a problem removing the project', async () => {
    //   const id = '456';
    //   const userId = '123';
    //   const project = { id, userId, name: 'Test Project' };
    //   const expectedError = new HttpException('Falha ao remover projeto.', HttpStatus.FORBIDDEN);
    //   jest.spyOn(prismaService.project, 'findFirst').mockResolvedValue(project);
    //   jest.spyOn(prismaService.project, 'delete').mockRejectedValue(new Error());

    //   try {
    //     await service.remove(id, userId);
    //   } catch (error) {
    //     expect(error).toEqual(expectedError);
    //   }
    // });
  });
});