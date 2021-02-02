import { IUserRepository } from '@/domain/entitygateway'
import { IUser } from '@/domain/entity'
import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    uuid: String,
    emaiL: String,
    Password: String,
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

const UserModel = mongoose.model('User', UserSchema)

export class User implements IUserRepository {
    findAll(): [IUser] {
        return null
    }

    create(IUser): void {
    }

    findById(id: string): IUser {
        return null
    }
}
