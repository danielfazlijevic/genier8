import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from '@/usecase';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService]
})
export class TemplateModule {}
