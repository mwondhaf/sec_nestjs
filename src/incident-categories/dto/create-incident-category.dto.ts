import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateIncidentCategoryDto {
  @ApiProperty({
    required: true,
    description: 'Name of the incident category',
    example: 'Fire',
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: 'Incident type id',
    example: '1',
  })
  @IsString()
  incidentTypeId: string;
}
