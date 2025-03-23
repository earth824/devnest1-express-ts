import authController from '../features/auth/auth.controller';
import authValidator from '../features/auth/auth.validator';
import authMiddleware from '../middlewares/auth.middleware';
import Route from './route';

class AuthRoute extends Route {
  constructor() {
    super();
    this.router.post('/register', authValidator.validateRegister(), authController.register);
    this.router.post('/login', authValidator.validateLogin(), authController.login);
    this.router.get('/me', authMiddleware.canActivate, authController.getMe);
  }
}

export default new AuthRoute().router;
