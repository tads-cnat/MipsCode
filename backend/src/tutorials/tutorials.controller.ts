import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { RequestTutorial } from './dto/request-tutorial.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { Roles as UserRoles } from '@prisma/client';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/role/role.guard';

@Controller('tutorials')
@ApiTags('/ tutorials')
export class TutorialsController {
  constructor(private readonly tutorialsService: TutorialsService) {}

  @Roles('ADMIN', 'PROFESSOR') // UserRoles.PROFESSOR, UserRoles.ADMIN
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('/author')
  findAllByAuthor(@Req() req: RequestTutorial) {
    const userId = req.user.id;
    return this.tutorialsService.findAllByAuthor(userId);
  }

  @Roles('ADMIN', 'PROFESSOR') // UserRoles.PROFESSOR, UserRoles.ADMIN
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('/author/:tutorialId')
  findOneByAuthor(@Param('tutorialId') id: string, @Req() req: RequestTutorial) {
    const userId = req.user.id;
    return this.tutorialsService.findOneByAuthor(id, userId);
  }

  @Roles('ADMIN', 'PROFESSOR') // UserRoles.PROFESSOR, UserRoles.ADMIN
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch('/author/:tutorialId')
  updateAnAuthorTutorial(
    @Param('tutorialId') id: string,
    @Body() updateTutorialDto: UpdateTutorialDto,
    @Req() req: RequestTutorial
  ) {
    const userId = req.user.id
    return this.tutorialsService.updateAnAuthorTutorial(id, updateTutorialDto, userId);
  }

  @Roles('ADMIN', 'PROFESSOR') // UserRoles.PROFESSOR, UserRoles.ADMIN
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Delete('/author/:tutorialId')
  removeAnAuthorTutorial(
    @Param('tutorialId') id: string,
    @Req() req: RequestTutorial,
  ) {
    const userId = req.user.id;
    return this.tutorialsService.removeAnAuthorTutorial(id, userId);
  }

  @Roles('ADMIN', 'PROFESSOR') // UserRoles.PROFESSOR, UserRoles.ADMIN
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
}
