import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ required: true, example: 'Department name' })
  @IsString()
  name: string;
}
