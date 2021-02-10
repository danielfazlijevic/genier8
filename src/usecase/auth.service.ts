import { Inject, Injectable } from '@nestjs/common'
import { UserService } from './user.service'
import { IUser } from '@/domain/entity'
import { IStorage } from '@/ports'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        @Inject('Storage') private storage: IStorage,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<IUser> {
        console.log(this.storage.userRepository)
        try {
            const user = await this.storage
                .userRepository()
                .findByEmailAndPassword(email, pass)
            if (!user) {
                throw new Error('Error finding user by email and pass')
            }
            return user
        } catch (error) {
            throw error
        }
    }

    signUser(user: IUser) {
        const data = { email: user.email, sub: user.uuid }
        return {
            access_token: this.jwtService.sign(data),
        }
    }
}
