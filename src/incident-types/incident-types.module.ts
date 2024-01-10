import { Module } from '@nestjs/common';
import { IncidentTypesService } from './incident-types.service';
import { IncidentTypesController } from './incident-types.controller';

@Module({
  controllers: [IncidentTypesController],
  providers: [IncidentTypesService],
})
export class IncidentTypesModule {}
