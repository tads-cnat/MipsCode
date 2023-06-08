import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DocumentsModule } from './documents/documents.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TutorialsModule } from './tutorials/tutorials.module';
import { ClassModule } from './class/class.module';
import * as cors from 'cors';

@Module({
  imports: [
    PrismaModule,
    DocumentsModule,
    ProjectsModule,
    UsersModule,
    AuthModule,
    TutorialsModule,
    ClassModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
