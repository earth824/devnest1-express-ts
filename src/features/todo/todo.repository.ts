import { Todo } from '@prisma/client';
import { ITodoRepository } from './interfaces/todo-repository.interface';
import prisma from '../../database/prisma';

class TodoRepository implements ITodoRepository {
  create(data: Omit<Todo, 'id'>): Promise<Todo> {
    return prisma.todo.create({ data });
  }

  findById(id: number): Promise<Omit<Todo, 'password'> | null> {
    return prisma.todo.findUnique({ where: { id } });
  }
}

export default new TodoRepository();
