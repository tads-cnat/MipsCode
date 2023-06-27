import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestUser } from 'src/users/dto/request-user.dto';

@ApiBearerAuth()
@ApiTags('Submissions')
@UseGuards(JwtAuthGuard)
@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  create(@Body() createSubmissionDto: CreateSubmissionDto, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.submissionsService.create(createSubmissionDto, userId);
  }

  @Get('task/:id')
  findAll(@Param('id') id: string, @Req() req: RequestUser) {
    const userId = req.user.id
    return this.submissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionsService.findOne(+id);
  }
}
