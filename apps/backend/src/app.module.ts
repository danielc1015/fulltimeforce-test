import { Module } from '@nestjs/common';
import { CommitModule } from './modules/commit/commit.module';

@Module({
  imports: [CommitModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
