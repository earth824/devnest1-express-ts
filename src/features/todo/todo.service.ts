import { CreateTodoDto } from './dtos/create-todo.dto';
import { ITodoRepository } from './interfaces/todo-repository.interface';
import { ITodoService } from './interfaces/todo-service.interface';
import { Todo } from './todo.entity';
import todoRepository from './todo.repository';

class TodoService implements ITodoService {
  constructor(private readonly todoRepository: ITodoRepository) {}

  createTodo(data: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.create(data);
  }
}

export default new TodoService(todoRepository);
