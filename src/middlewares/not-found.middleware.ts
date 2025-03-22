import { type Request } from 'express';
import NotFoundException from '../exceptions/not-found.exception';

class NotFoundMiddleware {
  handle(req: Request) {
    throw new NotFoundException(`resource: ${req.method} ${req.url} could not found on this server`);
  }
}

export default new NotFoundMiddleware();
