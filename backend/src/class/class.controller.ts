import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ManageStudent } from './dto/manage-student-dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role/role.guard';
import { DeleteClassDto } from './dto/delete-class-dto';

@Controller('class')
@ApiTags('/ Classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.classService.findOne(cod);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(cod, updateClassDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Post('/addStudent/:cod')
  addstudent(@Param('cod') cod: string, @Body() AddStudent: ManageStudent) {
    return this.classService.addStudent(cod, AddStudent);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Post('/removeStudent/:cod')
  removestudent(
    @Param('cod') cod: string,
    @Body() removeStudent: ManageStudent,
  ) {
    return this.classService.removeStudent(cod, removeStudent);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Delete(':cod')
  remove(@Param('cod') cod: string, @Body() DeleteClass: DeleteClassDto) {
    return this.classService.remove(cod, DeleteClass.professorId);
  }
}
