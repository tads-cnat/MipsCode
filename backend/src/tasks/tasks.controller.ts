import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { RequestUser } from 'src/users/dto/request-user.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Roles('PROFESSOR') // UserRoles.PROFESSOR
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Req() req: RequestUser) {
    const userId = req.user.id
    
    return this.tasksService.create(createTaskDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('tasklist/:id')
  findAllByTasklist(@Param('id') tasklistId: string, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.tasksService.findAllByTasklist(tasklistId, userId);
  }

  @Roles('PROFESSOR') // UserRoles.PROFESSOR
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('professor/:id')
  findAllByProfessor(@Param('id') professorId: string, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.tasksService.findAllByProfessor(professorId, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.tasksService.findOne(id, userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}