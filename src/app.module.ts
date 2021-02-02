import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplateModule } from './template/template.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
          MongooseModule.forRoot(process.env.MONGO_URI),
          TemplateModule,
          UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
