import { Module } from '@nestjs/common'
import { AuthService, LocalStrategy, JwtStrategy } from '@/usecase'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { StorageModule } from '@/infrastructure/storage'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '@/constants'

@Module({
    imports: [
        StorageModule.forRoot(),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '30d' },
        }),
        UserModule,
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
