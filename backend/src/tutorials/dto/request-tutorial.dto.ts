import { Request } from 'express';
import { User } from '@prisma/client';

export interface RequestTutorial extends Request {
  user: User;
}