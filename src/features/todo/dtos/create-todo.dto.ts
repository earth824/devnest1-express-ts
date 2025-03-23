import { Todo } from '../todo.entity';

export type CreateTodoDto = Omit<Todo, 'id'>;
