import { Injectable } from '@nestjs/common'
import { UserService } from './user.service'
import { IUser } from '@/domain/entity'

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, pass: string): Promise<IUser> {
        const user = await this.userService.findByEmailAndPassword(
            email,
            pass
        )
        return user
    }
}
