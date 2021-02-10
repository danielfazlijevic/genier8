import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '@/usecase'
import { IUser } from '@/domain/entity'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // Passport expects username and password in request body
        // so we should customize in the ctor
        super({ usernameField: 'email' })
    }

    async validate(email: string, password: string): Promise<IUser> {
        return await this.authService.validateUser(email, password)
    }
}
