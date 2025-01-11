import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetflixService } from './netflix/netflix.service';
import { NetflixController } from './netflix/netflix.controller';

@Module({
  imports: [],
  controllers: [AppController, NetflixController],
  providers: [AppService, NetflixService],
})
export class AppModule {}
