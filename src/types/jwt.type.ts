import { User } from '../features/user/user.entity';

export type JwtPayload = Pick<User, 'id'>;
