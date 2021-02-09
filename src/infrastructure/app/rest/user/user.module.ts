import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from '@/usecase'
import { StorageModule } from '@/infrastructure/storage'

@Module({
    imports: [StorageModule.forRoot()],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
