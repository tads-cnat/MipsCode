import { Request } from 'express';
import { User } from '@prisma/client';

export interface RequestUser extends Request {
  user: User;
}