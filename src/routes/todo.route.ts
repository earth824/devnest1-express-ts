import todoController from '../features/todo/todo.controller';
import todoValidator from '../features/todo/todo.validator';
import authMiddleware from '../middlewares/auth.middleware';
import Route from './route';

class Todo extends Route {
  constructor() {
    super();
    this.router.use(authMiddleware.canActivate);
    this.router.post('/', todoValidator.validateCreateTodo(), todoController.createTodo);
    this.router.get('/', todoController.getAllTodos);
    this.router.put('/:id', todoController.updateTodo);
  }
}

export default new Todo().router;
