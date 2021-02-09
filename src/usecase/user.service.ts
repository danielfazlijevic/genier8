import { Injectable, Inject } from '@nestjs/common'
import { INewUser } from '@/boundary/request'
import { IUser, User } from '@/domain/entity'
import { IStorage } from '@/ports'

@Injectable()
export class UserService {
    constructor(@Inject('Storage') private storage: IStorage) {}

    async createUser(newUser: INewUser) {
        const user = new User()
        user.email = newUser.email
        user.password = newUser.password
        try {
            await this.storage.userRepository().create(user)
        } catch (error) {
            console.log('ERROR: User service could not create user ', newUser)
            throw error
        }
    }

    async findAll() {
        return await this.storage.userRepository().findAll()
    }

    async findByEmail(email: string) {
        return await this.storage.userRepository().findByEmail(email)
    }

    async findByAPIKey(key: string) {
        return await this.storage.userRepository().findByAPIKey(key)
    }

    async findByEmailAndPassword(email: string, pass: string): Promise<IUser> {
        return await this.storage
            .userRepository()
            .findByEmailAndPassword(email, pass)
    }
}
