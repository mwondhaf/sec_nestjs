import { Test, TestingModule } from '@nestjs/testing';
import { PeopleInvolvedService } from './people-involved.service';

describe('PeopleInvolvedService', () => {
  let service: PeopleInvolvedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleInvolvedService],
    }).compile();

    service = module.get<PeopleInvolvedService>(PeopleInvolvedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
