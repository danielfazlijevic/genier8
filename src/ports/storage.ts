import { IUserRepository } from '@/domain/entitygateway';

export interface IStorage {
    UserRepository(): IUserRepository
}
