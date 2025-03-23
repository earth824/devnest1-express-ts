import { HttpStatus } from '../types/http.type';

export default abstract class HttpException extends Error {
  public abstract statusCode: HttpStatus;

  constructor(message: string, public detail?: any) {
    super(message);
  }
}
