export default abstract class HttpException extends Error {
  public abstract statusCode: number;

  constructor(message: string, public detail?: any) {
    super(message);
  }
}
