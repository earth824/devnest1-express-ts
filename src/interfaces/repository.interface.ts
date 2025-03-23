export interface IRepository<T> {
  findById(id: number): Promise<Omit<T, 'password'> | null>;

  create(data: Omit<T, 'id'>): Promise<T>;
}
