import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DocumentsModule } from './documents/documents.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TutorialsModule } from './tutorials/tutorials.module';

@Module({
  imports: [
    PrismaModule, 
    DocumentsModule, 
    ProjectsModule, 
    UsersModule, 
    AuthModule, 
    TutorialsModule
  ],
})

export class AppModule {}
