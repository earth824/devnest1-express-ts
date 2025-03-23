export interface IHashService {
  hash(plainText: string): Promise<string>;

  compare(plaineText: string, hashValue: string): Promise<boolean>;
}
