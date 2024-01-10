import { Test, TestingModule } from '@nestjs/testing';
import { PeopleInvolvedController } from './people-involved.controller';
import { PeopleInvolvedService } from './people-involved.service';

describe('PeopleInvolvedController', () => {
  let controller: PeopleInvolvedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleInvolvedController],
      providers: [PeopleInvolvedService],
    }).compile();

    controller = module.get<PeopleInvolvedController>(PeopleInvolvedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
