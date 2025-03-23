import { z } from 'zod';
import Validator from '../../middlewares/validator.middleware';

class TodoValidator extends Validator {
  constructor() {
    super();
    this.validateCreateTodo = this.validateCreateTodo.bind(this);
    this.validateUpdateTodo = this.validateUpdateTodo.bind(this);
  }

  private createTodoSchema = z.object({
    title: z.string()
  });

  private updateTodoSchema = z.object({
    title: z.string()
  });

  public validateCreateTodo() {
    return this.validate(this.createTodoSchema);
  }

  public validateUpdateTodo() {
    return this.validate(this.updateTodoSchema);
  }
}

export default new TodoValidator();
