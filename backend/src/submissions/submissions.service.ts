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

    const submissionId = randomUUID();
    const query = createSubmission(createSubmissionDto, submissionId)

    try {
      await this.prisma.$queryRawUnsafe(query);
    } catch (error) {
      throw new Error('Invalid taskId, tasklistId, or userId');
    }

    return await this.prisma.submission.findFirstOrThrow({ where: { id: submissionId } });
  }

  async findAll(taskId: string, userId: string) {
    return await this.prisma.submission.findMany({
      where: { taskId, userId }
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.submission.findFirstOrThrow({
      where: { id, userId }
    });
  }
}
