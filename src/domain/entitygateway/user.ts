import { IUser } from '../entity';

export interface IUserRepository {
    findAll(): Promise<IUser[]>
    create(IUser): void
    findByEmail(email: string): Promise<IUser>
    findByAPIKey(key: string): Promise<IUser> 
}
