import { Request } from 'express';
import { User } from '@prisma/client';

export interface RequestProject extends Request {
  user: User;
}