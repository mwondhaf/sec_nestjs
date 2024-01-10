import { Module } from '@nestjs/common';
import { PeopleInvolvedService } from './people-involved.service';
import { PeopleInvolvedController } from './people-involved.controller';

@Module({
  controllers: [PeopleInvolvedController],
  providers: [PeopleInvolvedService],
})
export class PeopleInvolvedModule {}
