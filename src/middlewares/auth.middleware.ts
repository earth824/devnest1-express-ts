import { NextFunction, Request, Response } from 'express';
import UnauthorizedException from '../exceptions/unauthorized.exception';
import { IJwtService } from '../features/auth/interfaces/jwt-service.interface';
import jwtService from '../features/auth/jwt.service';
import { IUserRepository } from '../features/user/interfaces/user-repository.interface';
import userRepository from '../features/user/user.repository';

class AuthMiddleware {
  constructor(private readonly jwtService: IJwtService, private readonly userRepository: IUserRepository) {
    this.extractJwtFromHeader = this.extractJwtFromHeader.bind(this);
    this.canActivate = this.canActivate.bind(this);
  }

  public async canActivate(req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
      const token = this.extractJwtFromHeader(req.headers.authorization);
      if (!token) {
        throw new UnauthorizedException('jwt not provided');
      }
      const payload = this.jwtService.verify(token);
      const user = await this.userRepository.findById(payload.id);
      if (!user) {
        throw new UnauthorizedException('user suspended');
      }
      (req as any).user = user;
    } catch (err) {
      next(err);
    }
    next();
  }

  private extractJwtFromHeader(bearerToken: string | undefined): string | undefined {
    return bearerToken?.split('Bearer ')[1];
  }
}

export default new AuthMiddleware(jwtService, userRepository);
