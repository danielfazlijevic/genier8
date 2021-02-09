import { Module } from '@nestjs/common'
import { AuthService } from '@/usecase'
import { UserModule } from '../user/user.module'

@Module({
    imports: [UserModule],
    providers: [AuthService],
})
export class AuthModule {}
