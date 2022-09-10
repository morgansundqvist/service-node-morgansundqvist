import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkExperienceModule } from './work-experience/work-experience.module';

@Module({
  imports: [WorkExperienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
