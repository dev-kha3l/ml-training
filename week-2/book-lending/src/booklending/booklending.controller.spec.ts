import { Test, TestingModule } from '@nestjs/testing';
import { BooklendingController } from './booklending.controller';
import { BooklendingService } from './booklending.service';

describe('BooklendingController', () => {
  let controller: BooklendingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooklendingController],
      providers: [BooklendingService],
    }).compile();

    controller = module.get<BooklendingController>(BooklendingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
