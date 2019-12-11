import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import {HealthController} from './health.controller';

@Module({
  imports: [HeroModule],
  controllers: [HealthController],
})
export class AppModule {}
