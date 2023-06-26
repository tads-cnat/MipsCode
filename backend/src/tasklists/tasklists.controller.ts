import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TasklistsService } from './tasklists.service';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { RequestUser } from 'src/users/dto/request-user.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Tasklist')
@Controller('tasklists')
export class TasklistsController {
  constructor(private readonly tasklistsService: TasklistsService) {}

  @Roles('PROFESSOR') // UserRoles.PROFESSOR
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createTasklistDto: CreateTasklistDto, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.tasklistsService.create(createTasklistDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('class/:id')
  findAll(@Param('id') id: string, @Req() req: RequestUser) {
    const userId = req.user.id
    const userRole = req.user.role
    return this.tasklistsService.findAll(id, userId, userRole);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':tasklistId')
  findOne(
    @Param('tasklistId') tasklistId: string,
    @Req() req: RequestUser
  ) {
    const userId = req.user.id
    const userRole = req.user.role
    return this.tasklistsService.findOne(tasklistId, userId, userRole);
  }

  @Roles('PROFESSOR') // UserRoles.PROFESSOR
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':tasklistId')
  update(
    @Param('tasklistId') tasklistId: string,
    @Body() updateTasklistDto: UpdateTasklistDto,
    @Req() req: RequestUser
  ) {
    const userId = req.user.id
    return this.tasklistsService.update(tasklistId, updateTasklistDto, userId);
  }

  @Roles('PROFESSOR') // UserRoles.PROFESSOR
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.tasklistsService.remove(id, userId);
  }
}
