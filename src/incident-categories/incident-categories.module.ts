import { Module } from '@nestjs/common';
import { IncidentCategoriesService } from './incident-categories.service';
import { IncidentCategoriesController } from './incident-categories.controller';

@Module({
  controllers: [IncidentCategoriesController],
  providers: [IncidentCategoriesService],
})
export class IncidentCategoriesModule {}
