import { Module } from '@nestjs/common'
import { AuthService } from '@/usecase'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from '@/usecase'

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
