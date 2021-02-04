import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TemplateModule } from './infrastructure/app/rest/template/template.module'
import { UserModule } from './infrastructure/app/rest/user/user.module'
import { StorageModule } from './infrastructure/storage'

@Module({
    imports: [StorageModule.forRoot(), TemplateModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
    exports: [StorageModule.forRoot()],
})
export class AppModule {}
