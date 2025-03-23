import { error } from 'console';
import envConfig from '../../config/env.config';
import UnauthorizedException from '../../exceptions/unauthorized.exception';
import { JwtPayload } from '../../types/jwt.type';
import { IJwtService } from './interfaces/jwt-service.interface';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

class JwtService implements IJwtService {
  private secretKey: string = envConfig.JWT_SECRET;
  private expiresIn: number = envConfig.JWT_EXPIRES;

  sign(payload: JwtPayload): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn });
  }

  verify(token: string): JwtPayload {
    try {
      return jwt.verify(token, this.secretKey) as JwtPayload;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw new UnauthorizedException(err.message);
      }
      if (err instanceof JsonWebTokenError) {
        throw new UnauthorizedException(err.message);
      }
      throw error;
    }
  }
}

export default new JwtService();
