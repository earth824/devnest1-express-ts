import { JwtPayload } from '../../../types/jwt.type';

export interface IJwtService {
  sign(payload: JwtPayload): string;

  verify(token: string): JwtPayload;
}
