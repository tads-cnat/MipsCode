import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class SubmissionsService {
  create(createSubmissionDto: CreateSubmissionDto) {
    return 'This action adds a new submission';
  }

  findAll() {
    return `This action returns all submissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`;
  }
}
