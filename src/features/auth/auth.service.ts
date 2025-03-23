import { IUserRepository } from '../user/interfaces/user-repository.interface';
import { RegisterDto } from './dtos/register.dto';
import { IAuthService } from './interfaces/auth-service.interface';
import userRepository from '../user/user.repository';
import BadRequestException from '../../exceptions/bad-request.exception';
import { IHashService } from './interfaces/hash-service.interface';
import hashService from './hash.service';
import { LoginDto } from './dtos/login.dto';
import { IJwtService } from './interfaces/jwt-service.interface';
import jwtService from './jwt.service';

class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashService: IHashService,
    private readonly jwtService: IJwtService
  ) {}

  public async register(data: RegisterDto): Promise<void> {
    const existUser = await this.userRepository.findByEmail(data.email);
    if (existUser) {
      throw new BadRequestException('email already in use');
    }
    data.password = await this.hashService.hash(data.password);
    await this.userRepository.create(data);
  }

  public async login(data: LoginDto): Promise<string> {
    const existUser = await this.userRepository.findByEmail(data.email);
    if (!existUser) {
      throw new BadRequestException('email or passward is incorrect');
    }
    const isPasswordCorrect = await this.hashService.compare(data.password, existUser.password);
    if (!isPasswordCorrect) {
      throw new BadRequestException('email or passward is incorrect');
    }
    return this.jwtService.sign({ id: existUser.id });
  }
}

export default new AuthService(userRepository, hashService, jwtService);
