import { UserWithoutPassword } from '../user/user.entity';

export const TodoStatus = {
  PENDING: 'pending',
  ONGOING: 'ongoing',
  COMPLETED: 'completed'
} as const;

export type Todo = {
  id: number;
  title: string;
  status: (typeof TodoStatus)[keyof typeof TodoStatus];
  userId: number;
  user?: UserWithoutPassword;
};
