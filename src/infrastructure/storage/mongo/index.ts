import { IStorage } from '@/ports'
import { IUserRepository } from '@/domain/entitygateway'
import { InjectModel, getModelToken, MongooseModule } from '@nestjs/mongoose'
import { Injectable, Module } from '@nestjs/common'
import { UserRepository } from './user'

@Injectable()
export class MongoStore implements IStorage {
    private _userRepository: IUserRepository

    public constructor() {
        this._userRepository = new UserRepository()
    }

    userRepository(): IUserRepository {
        return this._userRepository
    }
}
