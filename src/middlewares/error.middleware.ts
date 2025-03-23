import { type NextFunction, type Request, type Response } from 'express';
import HttpException from '../exceptions/http.exception';
import { HttpStatus } from '../types/http.type';

type ErrorResponse = {
  statusCode: HttpStatus;
  success: false;
  message: string;
  detail?: any;
};

class ErrorHandler {
  handle(err: unknown, _req: Request, res: Response<ErrorResponse>, _next: NextFunction) {
    if (err instanceof HttpException) {
      res
        .status(err.statusCode)
        .json({ statusCode: err.statusCode, success: false, message: err.message, detail: err.detail });
    } else if (err instanceof Error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, success: false, message: err.message });
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, success: false, message: 'internal server error' });
    }
  }
}

export default new ErrorHandler();
