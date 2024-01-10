import { Test, TestingModule } from '@nestjs/testing';
import { IncidentTypesController } from './incident-types.controller';
import { IncidentTypesService } from './incident-types.service';

describe('IncidentTypesController', () => {
  let controller: IncidentTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentTypesController],
      providers: [IncidentTypesService],
    }).compile();

    controller = module.get<IncidentTypesController>(IncidentTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
