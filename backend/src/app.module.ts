import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DocumentsModule } from './documents/documents.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule, 
    DocumentsModule, 
    ProjectsModule, 
    UsersModule, AuthModule
  ],
})

export class AppModule {}
