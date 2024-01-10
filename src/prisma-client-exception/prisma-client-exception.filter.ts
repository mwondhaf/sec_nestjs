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

    // switch (exception.code) {
    //   case 'P2002': {
    //     const status = HttpStatus.CONFLICT;
    //     response.status(status).json({
    //       statusCode: status,
    //       message: message,
    //     });

    //     break;
    //   }
    //   case 'P1012': {
    //     const status = HttpStatus.UNPROCESSABLE_ENTITY;
    //     response.status(status).json({
    //       statusCode: status,
    //       message: message,
    //     });
    //     break;
    //   }
    //   default:
    //     // default 500 error code
    //     super.catch(exception, host);
    //     break;
    // }

    switch (exception.code) {
      case 'P3000':
        {
          const status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: 'Unique key violation',
          });
        }
        break;

      case 'P3001':
        {
          const status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: 'Foreign key violation',
          });
        }
        break;

      case 'P3002':
        {
          const status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: 'Data integrity error',
          });
        }
        break;

      case 'P3003':
        {
          const status = HttpStatus.NOT_FOUND;
          response.status(status).json({
            statusCode: status,
            message: 'Data not found',
          });
        }
        break;

      case 'P3004':
        {
          const status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: 'Invalid data type',
          });
        }
        break;

      case 'P3005':
        {
          const status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: 'Data conversion error',
          });
        }
        break;

      case 'P3006':
        {
          const status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: 'Data validation error',
          });
        }
        break;

      case 'P3007':
        {
          const status = HttpStatus.FORBIDDEN;
          response.status(status).json({
            statusCode: status,
            message: 'Data access error',
          });
        }
        break;

      case 'P3008':
        {
          const status = HttpStatus.INTERNAL_SERVER_ERROR;
          response.status(status).json({
            statusCode: status,
            message: 'Data corruption error',
          });
        }
        break;

      case 'P3009':
        {
          const status = HttpStatus.INTERNAL_SERVER_ERROR;
          response.status(status).json({
            statusCode: status,
            message: 'Data inconsistency error',
          });
        }
        break;

      case 'P2002': {
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: message,
        });

        break;
      }

      case 'P1012': {
        const status = HttpStatus.UNPROCESSABLE_ENTITY;
        response.status(status).json({
          statusCode: status,
          message: message,
        });
        break;
      }
      // Add more cases for other error codes as needed

      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}
