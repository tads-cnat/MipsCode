import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasklistsService } from './tasklists.service';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';

@Controller('tasklists')
export class TasklistsController {
  constructor(private readonly tasklistsService: TasklistsService) {}

  @Post()
  create(@Body() createTasklistDto: CreateTasklistDto) {
    return this.tasklistsService.create(createTasklistDto);
  }

  @Get(':classroomId')
  findAll(@Param('classroomId') classroomId: string) {
    return this.tasklistsService.findAll(classroomId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasklistsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasklistDto: UpdateTasklistDto) {
    return this.tasklistsService.update(id, updateTasklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasklistsService.remove(id);
  }
}
