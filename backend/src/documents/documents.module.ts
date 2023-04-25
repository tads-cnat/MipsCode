import { Module } from '@nestjs/common';
import { DocumentService } from './documents.service';
import { DocumentController } from './documents.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentsModule {}
