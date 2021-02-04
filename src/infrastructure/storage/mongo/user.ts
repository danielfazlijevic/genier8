import { IUserRepository } from '@/domain/entitygateway'
import { IUser, User as UserEntity, ITemplate } from '@/domain/entity'
import * as mongoose from 'mongoose'
import { InjectModel, Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'

class UserDocument extends mongoose.Document implements IUser {
    public constructor(
        public uuid: string,
        public email: string,
        public password: string,
        public apiKey: string,
        public templates?: ITemplate[]
    ) {
        super()
    }
}

const UserSchema = new mongoose.Schema<UserDocument>({
    uuid: String,
    email: String,
    password: String,
    apiKey: String,
    templates: [
        {
            template: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Template',
            },
        },
    ],
})

const User = mongoose.model('User', UserSchema)

function makeUser(u: any): IUser {
    return new UserEntity(u._id, u.email, u.password, u.apiKey, u.templates)
}

export class UserRepository implements IUserRepository {
    async findAll(): Promise<IUser[]> {
        const users = await User.find().exec()
        return users.map((e) => makeUser(e))
    }

    async create(user: IUser) {
        const u = new User(user)
        u.apiKey = '12345'
        await u.save()
    }

    async findByEmail(email: string): Promise<IUser> {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Not found')
        }
        return makeUser(user)
    }

    async findByAPIKey(apiKey: string): Promise<IUser> {
        const user = await User.findOne({ apiKey })
        console.log(user)
        if (!user) {
            throw new Error('Not found')
        }
        return makeUser(user)
    }
}
