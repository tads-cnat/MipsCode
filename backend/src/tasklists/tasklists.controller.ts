import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TasklistsService } from './tasklists.service';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { RequestUser } from 'src/users/dto/request-user.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Roles('PROFESSOR') // UserRoles.PROFESSOR, UserRoles.ADMIN
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@Controller('tasklists')
export class TasklistsController {
  constructor(private readonly tasklistsService: TasklistsService) {}

  @Post()
  create(@Body() createTasklistDto: CreateTasklistDto) {
    return this.tasklistsService.create(createTasklistDto);
  }

  @Get('class/:id')
  findAll(@Param('id') id: string) {
    return this.tasklistsService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasklistsService.findOne(id);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Body() updateTasklistDto: UpdateTasklistDto,
      @Req() req: RequestUser
    ) {
      const userId = req.user.id
      return this.tasklistsService.update(id, updateTasklistDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.tasklistsService.remove(id, userId);
  }
}
