import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { RequestTutorial } from './dto/request-tutorial.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles/roles.decorator';
import { UserRole } from '@prisma/client';
import { RolesGuard } from 'src/auth/role/role.guard';

@Controller('tutorials')
@ApiTags('/ tutorials')
export class TutorialsController {
  constructor(private readonly tutorialsService: TutorialsService) {}

  @Roles(UserRole.professor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() createTutorialDto: CreateTutorialDto) {
    return this.tutorialsService.create(createTutorialDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.tutorialsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorialsService.findOne(id);
  }

  @Roles(UserRole.professor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('/professor')
  findAllFromProfessor(@Req() req: RequestTutorial) {
    const userId = req.user.id;
    return this.tutorialsService.findAllFromProfessor(userId);
  }

  @Roles(UserRole.professor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('/professor/:id')
  findOneFromProfessor(@Param('id') id: string, @Req() req: RequestTutorial) {
    const userId = req.user.id;
    return this.tutorialsService.findOneFromProfessor(id, userId);
  }

  @Roles(UserRole.professor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch('/professor/:id')
  updateProfessorTutorial(@Param('id') id: string, @Body() updateTutorialDto: UpdateTutorialDto) {
    return this.tutorialsService.updateProfessorTutorial(id, updateTutorialDto);
  }

  @Roles(UserRole.professor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Delete('/professor/:id')
  removeProfessorTutorial(@Param('id') id: string, @Req() req: RequestTutorial) {
    const userId = req.user.id
    return this.tutorialsService.removeProfessorTutorial(id, userId);
  }
}
