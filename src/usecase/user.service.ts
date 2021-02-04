import { Injectable } from '@nestjs/common'
import { Store } from '@/infrastructure/storage'
import { INewUser } from '@/boundary/request'
import { User } from '@/domain/entity'

@Injectable()
export class UserService {
    async createUser(newUser: INewUser) {
        const user = new User()
        user.email = newUser.email
        user.password = newUser.password
        try {
            await Store.userRepository().create(user)
        } catch (error) {
            console.log('ERROR: User service could not create user ', newUser)
            throw error
        }
    }

    async findAll() {
        return await Store.userRepository().findAll()
    }

    async findByEmail(email: string) {
        return await Store.userRepository().findByEmail(email)
    }

    async findByAPIKey(key: string) {
        return await Store.userRepository().findByAPIKey(key)
    }
}
