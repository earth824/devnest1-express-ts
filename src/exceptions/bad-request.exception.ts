import { HttpStatus } from '../types/http.type';
import HttpException from './http.exception';

export default class BadRequestException extends HttpException {
  public statusCode: HttpStatus = HttpStatus.BAD_REQUEST;
}
