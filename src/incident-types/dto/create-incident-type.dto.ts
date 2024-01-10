import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateIncidentTypeDto {
  @ApiProperty()
  @IsString()
  name: string;
}
