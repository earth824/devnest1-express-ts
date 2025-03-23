import { IRepository } from '../../../interfaces/repository.interface';
import { User } from '../user.entity';

export interface IUserRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
