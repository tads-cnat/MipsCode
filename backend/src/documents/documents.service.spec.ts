import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { DocumentService } from './documents.service';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from '.prisma/client';

describe('DocumentService', () => {
  let service: DocumentService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentService, PrismaService],
    }).compile();

    service = module.get<DocumentService>(DocumentService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    const createDocumentDto: CreateDocumentDto = {
      title: 'Document',
      content: 'Content'
    };

    it('should create a document', async () => {
      const result = await service.create(createDocumentDto);
      expect(result).toBeDefined();
    });

    it('should throw an error if document already exists', async () => {
      jest
        .spyOn(prisma.document, 'create')
        .mockRejectedValue({ code: 'P2002' } as any);

      await expect(service.create(createDocumentDto)).rejects.toThrow(
        new HttpException('Documento já existe', HttpStatus.CONFLICT),
      );
    });
  });

  describe('read', () => {
    it('should return an array of documents', async () => {
      expect(await service.findAll()).toBeDefined();
    });

    it('should throw an error if document id is invalid', async () => {
      await expect(service.findOne('1')).rejects.toThrow(
        new HttpException('Id inválido', HttpStatus.BAD_REQUEST),
      );
    });

    it('should throw an error if document does not exists', async () => {
      await expect(service.findOne('9aa6a179-91ef-4f7a-af66-b0d8fb010887')).rejects.toThrow(
        new HttpException('Nenhum documento encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('update', () => {
    const updateDocumentDto: UpdateDocumentDto = {
      title: 'Document Edited',
      content: 'Content Edited'
    };

    it('should update a document', async () => {
      const document: Document = await prisma.document.findFirst({
        where: {
          title: 'Document'
        }
      });

      const result = await service.update(document.id, updateDocumentDto);

      expect(result).toStrictEqual({ id: document.id, ...updateDocumentDto });
    });

    it('should throw an error if document does not exists', async () => {
      await expect(service.update('9aa6a179-91ef-4f7a-af66-b0d8fb010887', updateDocumentDto)).rejects.toThrow(
        new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('delete', () => {
    it('should delete a document', async () => {
      const document: Document = await prisma.document.findFirst({
        where: {
          title: 'Document Edited'
        }
      });

      const result = await service.remove(document.id);

      expect(result).toStrictEqual(document);
    });

    it('should throw an error if document does not exists', async () => {
      await expect(service.remove('1')).rejects.toThrow(
        new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });
});