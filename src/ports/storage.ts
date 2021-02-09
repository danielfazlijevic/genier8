import { IUserRepository, ITemplateRepository } from '@/domain/entitygateway'

export interface IStorage {
    userRepository(): IUserRepository
    templateRepository(): ITemplateRepository
}
