export interface IRepository<T> {
  findAll(): Promise<Omit<T, 'password'>[]>;

  findById(id: number): Promise<Omit<T, 'password'> | null>;

  create(data: Omit<T, 'id'>): Promise<T>;
}
