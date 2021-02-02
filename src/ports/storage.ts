import { IUserRepository } from '@/domain/entitygateway';

export interface Storage {
    UserRepository(): IUserRepository
}
