import { Test, TestingModule } from '@nestjs/testing';
import { IncidentCategoriesController } from './incident-categories.controller';
import { IncidentCategoriesService } from './incident-categories.service';

describe('IncidentCategoriesController', () => {
  let controller: IncidentCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentCategoriesController],
      providers: [IncidentCategoriesService],
    }).compile();

    controller = module.get<IncidentCategoriesController>(IncidentCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
