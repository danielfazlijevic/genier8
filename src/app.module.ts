import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplateModule } from './infrastructure/app/rest/template/template.module';
import { UserModule } from './infrastructure/app/rest/user/user.module';

@Module({
  imports: [
          TemplateModule,
          UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
