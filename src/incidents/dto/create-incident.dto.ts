import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsString } from 'class-validator';

enum Severity {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export class CreateIncidentDto {
  @ApiProperty({ required: false, example: 'Low' })
  @IsEnum(Severity)
  severity: 'Low';

  @ApiProperty({ required: true, example: 'Incident description' })
  @IsString()
  description: string;

  @ApiProperty({ required: false, example: 'Incident Reference Number' })
  @IsString()
  referenceNumber: string;

  @ApiProperty({ required: true, example: 'Incident location' })
  @IsString()
  location: string;

  @ApiProperty({ required: true, example: 'Incident investigation' })
  @IsString()
  investigation: string;

  @ApiProperty({ required: true, example: '1' })
  @IsString()
  incidentCategoryId: string;

  @ApiProperty({ required: true, example: '2021-01-01T00:00:00.000Z' })
  @IsDateString()
  incidentTime: Date;

  @ApiProperty({ required: true, example: '2021-01-01T00:00:00.000Z' })
  @IsDateString()
  incidentClosedTime: Date;

  @ApiProperty({ required: true, description: 'Entity id', example: '1' })
  @IsString()
  entityId: string;

  @ApiProperty({
    required: true,
    description: 'User email',
    example: 'compiler@mail.com',
  })
  @IsString()
  compilerEmail: string;

  @IsString()
  editorEmail: string;

  @ApiProperty({
    required: true,
    description: 'Reporter name',
    example: 'John Doe',
  })
  @IsString()
  reporterName: string;

  @ApiProperty({
    required: true,
    description: 'Reporter Department id',
    example: '1',
  })
  @IsString()
  departmentId: string;
}
