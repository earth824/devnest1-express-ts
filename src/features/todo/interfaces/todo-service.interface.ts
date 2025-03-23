import { CreateTodoDto } from '../dtos/create-todo.dto';
import { Todo } from '../todo.entity';

export interface ITodoService {
  createTodo(data: CreateTodoDto): Promise<Todo>;

  getAllTodos(): Promise<Todo[]>;
}
