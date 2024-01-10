import { PartialType } from '@nestjs/swagger';
import { CreateIncidentCategoryDto } from './create-incident-category.dto';

export class UpdateIncidentCategoryDto extends PartialType(CreateIncidentCategoryDto) {}
