import { PartialType } from '@nestjs/swagger';
import { CreatePeopleInvolvedDto } from './create-people-involved.dto';

export class UpdatePeopleInvolvedDto extends PartialType(CreatePeopleInvolvedDto) {}
