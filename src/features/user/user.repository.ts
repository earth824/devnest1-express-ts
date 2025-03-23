import { User } from '@prisma/client';
import { IUserRepository } from './interfaces/user-repository.interface';
import prisma from '../../database/prisma';

class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  findById(id: number): Promise<Omit<User, 'password'> | null> {
    return prisma.user.findUnique({ where: { id }, omit: { password: true } });
  }

  create(data: Omit<User, 'id'>): Promise<User> {
    return prisma.user.create({ data });
  }
}

export default new UserRepository();
