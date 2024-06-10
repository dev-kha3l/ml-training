import { Module } from '@nestjs/common';
import { BooklendingService } from './booklending.service';
import { BooklendingController } from './booklending.controller';

@Module({
  controllers: [BooklendingController],
  providers: [BooklendingService],
})
export class BooklendingModule {}
