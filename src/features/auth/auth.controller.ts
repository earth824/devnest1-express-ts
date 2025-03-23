import { type NextFunction, type Request, type Response } from 'express';
import Controller from '../../controllers/controller';
import { IAuthService } from './interfaces/auth-service.interface';
import authService from './auth.service';

class AuthController extends Controller {
  constructor(private readonly authService: IAuthService) {
    super();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.getMe = this.getMe.bind(this);
  }

  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.authService.register(req.body);
      this.sendSuccessResponse<{ message: string }>(res, { message: 'registered successfully' });
    } catch (err) {
      next(err);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const accessToken = await this.authService.login(req.body);
      this.sendSuccessResponse(res, { accessToken });
    } catch (err) {
      next(err);
    }
  }

  public getMe(req: Request, res: Response, _next: NextFunction): void {
    this.sendSuccessResponse(res, { user: (req as any).user });
  }
}

export default new AuthController(authService);
