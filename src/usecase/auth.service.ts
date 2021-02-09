import { Injectable } from '@nestjs/common'
import { UserService } from './user.service'
import { IUser } from '@/domain/entity'

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, pass: string): Promise<IUser> {
        try {
            const user = await this.userService.findByEmailAndPassword(
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
