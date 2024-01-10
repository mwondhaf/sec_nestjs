import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateIncidentTypeDto } from './create-incident-type.dto';
import { IsString } from 'class-validator';

export class UpdateIncidentTypeDto extends PartialType(CreateIncidentTypeDto) {}
