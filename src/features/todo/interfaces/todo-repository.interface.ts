import { IRepository } from '../../../interfaces/repository.interface';
import { Todo } from '../todo.entity';

export interface ITodoRepository extends IRepository<Todo> {}
