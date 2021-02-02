import { IUserRepository } from '@/domain/entitygateway'
import { IUser, ITemplate } from '@/domain/entity'
import * as mongoose from 'mongoose'

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

const User = mongoose.model('User', UserSchema)

class UserRepository implements IUserRepository {
    findAll(): Promise<[IUser]> {
        return null
    }

    async create(user: IUser) {
        const newUser = new User(user)
        newUser.save()
    }

    async findByEmail(email: string): Promise<IUser> {
        const doc = await User.findOne({ email })
        if (doc) {
            throw new Error('not found')
        }
        return doc
    }
}

export const userRepository = new UserRepository()
