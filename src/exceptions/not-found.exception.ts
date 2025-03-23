import { HttpStatus } from '../types/http.type';
import HttpException from './http.exception';

export default class NotFoundException extends HttpException {
  public statusCode: HttpStatus = HttpStatus.NOT_FOUND;
}
