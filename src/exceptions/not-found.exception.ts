import { HttpStatus } from '../types/http.type';
import HttpException from './http.exception';

export default class NotFoundException extends HttpException {
  public statusCode: number = HttpStatus.NOT_FOUND;
}
