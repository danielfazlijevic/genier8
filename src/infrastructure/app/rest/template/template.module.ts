import { Module } from '@nestjs/common'
import { TemplateController } from './template.controller'
import { TemplateService } from '@/usecase'
import { StorageModule } from '@/infrastructure/storage'

@Module({
    imports: [StorageModule.forRoot()],
    controllers: [TemplateController],
    providers: [TemplateService],
})
export class TemplateModule {}
