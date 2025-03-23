import { ZodType } from 'zod';
import BadRequestException from '../exceptions/bad-request.exception';
import { NextFunction, Request, Response } from 'express';

export default class Validator {
  protected validate(schema: ZodType) {
    return function (req: Request, _res: Response, next: NextFunction) {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        throw new BadRequestException('validation error', result.error.issues);
      }
      req.body = result.data;
      next();
    };
  }
}
