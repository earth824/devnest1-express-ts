import { LoginDto } from '../dtos/login.dto';
import { RegisterDto } from '../dtos/register.dto';

export interface IAuthService {
  register(data: RegisterDto): Promise<void>;

  login(data: LoginDto): Promise<string>;
}
