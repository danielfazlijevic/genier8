import { IStorage } from '@/ports'
import { IUserRepository } from '@/domain/entitygateway'
import { InjectModel, getModelToken, MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { UserRepository  } from './user'
import * as mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


export class MongoStore implements IStorage {
    #userRepository: IUserRepository
    public constructor () {
        this.#userRepository = new UserRepository()
    }

    userRepository(): IUserRepository {
        return this.#userRepository;
    }
}
