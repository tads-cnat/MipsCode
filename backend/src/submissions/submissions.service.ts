import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import createSubmission from './sql/create-submission';
import { isUUID } from 'class-validator';

@Injectable()
export class SubmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubmissionDto: CreateSubmissionDto, userId: string) {
    if (userId !== createSubmissionDto.userId) {
      throw new HttpException('Unauthorized student access', HttpStatus.UNAUTHORIZED);
    }

    if (
      !isUUID(createSubmissionDto.taskId) ||
      !isUUID(createSubmissionDto.tasklistId) ||
      !isUUID(createSubmissionDto.userId) 
    ) {
      throw new HttpException('Invalid input id', HttpStatus.FORBIDDEN);
    }    

    const query = createSubmission(createSubmissionDto)
    const submission = await this.prisma.$queryRawUnsafe(query)
    const submissionId = submission[0]?.id;
    
    console.log(submissionId);

    return submission;
  }

  findAll() {
    return `This action returns all submissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`;
  }
}
