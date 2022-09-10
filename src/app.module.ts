import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [WorkExperienceModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
