import { Module } from '@nestjs/common';
import { DocumentService } from './documents.service';
import { DocumentController } from './documents.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, PrismaService],
})
export class DocumentsModule {}
