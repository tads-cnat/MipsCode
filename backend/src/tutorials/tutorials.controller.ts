import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { RequestTutorial } from './dto/request-tutorial.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('tutorials')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('/ tutorials')
export class TutorialsController {
  constructor(private readonly tutorialsService: TutorialsService) {}

  @Post()
  create(@Body() createTutorialDto: CreateTutorialDto) {
    return this.tutorialsService.create(createTutorialDto);
  }

  @Get()
  findAll() {
    return this.tutorialsService.findAll();
  }

  @Get('/professor')
  findAllFromUser(@Req() req: RequestTutorial) {
    const userId = req.user.id;
    return this.tutorialsService.findAllFromUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorialsService.findOne(id);
  }

  @Get('/professor/:id')
  findOneFromUser(@Param('id') id: string, @Req() req: RequestTutorial) {
    const userId = req.user.id;
    return this.tutorialsService.findOneFromUser(id, userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutorialDto: UpdateTutorialDto) {
    return this.tutorialsService.update(id, updateTutorialDto);
  }

  @Patch(':id')
  updateFromUser(@Param('id') id: string, @Body() updateTutorialDto: UpdateTutorialDto) {
    return this.tutorialsService.update(id, updateTutorialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorialsService.remove(id);
  }

  @Delete(':id')
  removeFromUser(@Param('id') id: string, @Req() req: RequestTutorial) {
    return this.tutorialsService.remove(id);
  }
}
