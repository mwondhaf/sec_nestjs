import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePeopleInvolvedDto {
  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  identity_number: string;

  @ApiProperty({ required: false })
  @IsString()
  nationality: string;

  @ApiProperty({ required: true })
  @IsString()
  departmentId: string;

  @ApiProperty({ required: true })
  @IsString()
  incidentReferenceNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  remarks: string;
}
