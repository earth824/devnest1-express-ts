import { z } from 'zod';
import Validator from '../../middlewares/validator.middleware';

class AuthValidator extends Validator {
  constructor() {
    super();
    this.validateRegister = this.validateRegister.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  private registerSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6)
    })
    .refine(value => value.password === value.confirmPassword)
    .transform(value => ({
      email: value.email,
      password: value.password
    }));

  private loginSchema = z.object({
    email: z.string(),
    password: z.string()
  });

  public validateRegister() {
    return this.validate(this.registerSchema);
  }

  public validateLogin() {
    return this.validate(this.loginSchema);
  }
}

export default new AuthValidator();
