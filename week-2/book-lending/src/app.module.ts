import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooklendingModule } from './booklending/booklending.module';

@Module({
  imports: [BooklendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
