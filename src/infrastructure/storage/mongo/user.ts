import { IUserRepository } from '@/domain/entitygateway'
import { IUser, ITemplate } from '@/domain/entity'
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

export class UserRepository implements IUserRepository {
    async findAll(): Promise<IUser[]> {
        throw new Error('no')
    }

    async create(user: IUser) {
        const u = new User(user)
        u.apiKey = '12345'
        await u.save()
    }

    async findByEmail(email: string): Promise<IUser> {
        throw new Error('not implemented')
    }
}
