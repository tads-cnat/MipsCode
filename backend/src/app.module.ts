import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [PrismaModule, ProjectsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
