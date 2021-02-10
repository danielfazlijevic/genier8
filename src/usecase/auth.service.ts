import { Inject, Injectable } from '@nestjs/common'
import { UserService } from './user.service'
import { IUser } from '@/domain/entity'
import { IStorage } from '@/ports'

@Injectable()
export class AuthService {
    constructor(@Inject('Storage') private storage: IStorage) {}

    async validateUser(email: string, pass: string): Promise<IUser> {
        console.log(this.storage.userRepository)
        try {
            const user = await this.storage.userRepository().findByEmailAndPassword(
                email,
                pass
            )
            if (!user) {
                throw new Error('Error finding user by email and pass')
            }
            return user
        } catch (error) {
            throw error
        }
    }
}
