import bcrypt from 'bcryptjs';
import { IHashService } from './interfaces/hash-service.interface';

class HashService implements IHashService {
  private saltRound: number = 12;

  public hash(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, this.saltRound);
  }

  public compare(plaineText: string, hashValue: string): Promise<boolean> {
    return bcrypt.compare(plaineText, hashValue);
  }
}

export default new HashService();
