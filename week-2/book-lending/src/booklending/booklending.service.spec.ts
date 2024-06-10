import { Test, TestingModule } from '@nestjs/testing';
import { BooklendingService } from './booklending.service';

describe('BooklendingService', () => {
  let service: BooklendingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooklendingService],
    }).compile();

    service = module.get<BooklendingService>(BooklendingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
