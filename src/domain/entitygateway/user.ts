import { IUser } from '../entity';

export interface IUserRepository {
    findAll(): [IUser]
    create(IUser): void
    findById(id: string): IUser
}
