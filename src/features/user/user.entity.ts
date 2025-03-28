export type User = {
  id: number;
  email: string;
  password: string;
};

export type UserWithoutPassword = Omit<User, 'pasword'>;
