import { Response } from 'express';
import { HttpStatus } from '../types/http.type';

type SuccessResponse<T> = {
  statusCode: HttpStatus;
  success: true;
  data: T;
};

export default abstract class Controller {
  protected sendSuccessResponse<T>(
    res: Response<SuccessResponse<T>>,
    data: T,
    statusCode: HttpStatus = HttpStatus.OK
  ): void {
    res.status(statusCode).json({ statusCode, success: true, data });
  }
}
