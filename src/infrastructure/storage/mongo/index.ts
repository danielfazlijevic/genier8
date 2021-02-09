import { IStorage } from '@/ports'
import { IUserRepository, ITemplateRepository } from '@/domain/entitygateway'
import { InjectModel, getModelToken, MongooseModule } from '@nestjs/mongoose'
import { Injectable, Module } from '@nestjs/common'
import { UserRepository } from './user'
import { TemplateRepository } from './template'

@Injectable()
export class MongoStore implements IStorage {
    private _userRepository: IUserRepository
    private _templateRepository: ITemplateRepository

    public constructor() {
        this._userRepository = new UserRepository()
        this._templateRepository = new TemplateRepository()
    }

    userRepository(): IUserRepository {
        return this._userRepository
    }

    templateRepository(): ITemplateRepository {
        return this._templateRepository
    }
}
