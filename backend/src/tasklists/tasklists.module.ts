import { Module } from '@nestjs/common';
import { TasklistsService } from './tasklists.service';
import { TasklistsController } from './tasklists.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TasklistsController],
  providers: [TasklistsService]
})
export class TasklistsModule {}
