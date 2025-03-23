import { type NextFunction, type Request, type Response } from 'express';
import Controller from '../../controllers/controller';
import { ITodoService } from './interfaces/todo-service.interface';
import todoService from './todo.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoStatus } from './todo.entity';

class TodoController extends Controller {
  constructor(private todoService: ITodoService) {
    super();
    this.createTodo = this.createTodo.bind(this);
    this.getAllTodos = this.getAllTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  public async createTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newTodo: CreateTodoDto = {
        title: req.body.title,
        status: TodoStatus.PENDING,
        userId: (req as any).user.id
      };
      const todo = await this.todoService.createTodo(newTodo);
      this.sendSuccessResponse(res, { todo });
    } catch (err) {
      next(err);
    }
  }

  public async getAllTodos(): Promise<void> {}

  public async updateTodo(): Promise<void> {}
}

export default new TodoController(todoService);
