import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { describe, expect, beforeEach, it } from '@jest/globals';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
    }).compile();

    service = module.get<ApiService>(ApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
