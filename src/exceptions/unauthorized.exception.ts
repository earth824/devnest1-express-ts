import { HttpStatus } from '../types/http.type';
import HttpException from './http.exception';

export default class UnauthorizedException extends HttpException {
  public statusCode: HttpStatus = HttpStatus.UNAUTHORIZED;
}
