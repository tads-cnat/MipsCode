import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT;
        const errorMessage = message.match(/`([^`]+)`\)$/); // Extrai a parte entre "`" no final da string
        const errorField = errorMessage ? errorMessage[1] : 'Unknown field';
        response.status(status).json({
          statusCode: status,
          message: `Unique constraint failed on the field: (${errorField})`,
          error: 'Conflict'
        });
        break;
      }

      case 'P2025': {
        const status = HttpStatus.NOT_FOUND;
        const regex = /The (\w+) with value \(.+\) was not found in/;
        const match = message.match(regex);
        const entityName = match ? match[1] : null;
        const errorMessage = message.match(/`([^`]+)`\)$/);
        response.status(status).json({
          statusCode: status,
          message: entityName ? `The requested ${entityName} was not found.` : 'Record not found',
          error: 'Not found'
        });
        break;
      }

      case 'P2101': {
        const status = HttpStatus.FORBIDDEN;
        const regex = /The (\w+) operation is not permitted/;
        const match = message.match(regex);
        const operationName = match ? match[1] : 'Unknown operation';
        response.status(status).json({
          statusCode: status,
          message: `The requested ${operationName} operation is forbidden.`,
        });
        break;
      }

      case 'P4001': {
        const status = HttpStatus.BAD_REQUEST;
        const regex = /Invalid input for (\w+)/;
        const match = message.match(regex);
        const inputName = match ? match[1] : 'Unknown input';
        response.status(status).json({
          statusCode: status,
          message: `Invalid input data for ${inputName}.`,
        });
        break;
      }

      case 'P4002': {
        const status = HttpStatus.BAD_REQUEST;
        const regex = /Required field\((.+)\)/;
        const match = message.match(regex);
        const errorField = match ? match[1] : 'Unknown field';

        response.status(status).json({
          statusCode: status,
          message: `Required field missing: ${errorField}`,
        });
        break;
      }

      case 'P4003': {
        const status = HttpStatus.BAD_REQUEST;
        const regex = /Invalid field value\((.+)\)/;
        const match = message.match(regex);
        const errorField = match ? match[1] : 'Unknown field';

        response.status(status).json({
          statusCode: status,
          message: `Invalid field value: ${errorField}`,
        });
        break;
      }

      default:
        super.catch(exception, host); // default 500 error code
        break;
    }
  }
}