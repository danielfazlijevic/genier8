import { Module } from '@nestjs/common'
import { AuthService } from '@/usecase'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from '@/usecase'
import { StorageModule } from '@/infrastructure/storage'

@Module({
    imports: [StorageModule.forRoot(), UserModule, PassportModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
