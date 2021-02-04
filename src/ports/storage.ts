import { IUserRepository } from '@/domain/entitygateway';

export interface IStorage {
    userRepository(): IUserRepository
}
