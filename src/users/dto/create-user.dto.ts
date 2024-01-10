import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;

  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ default: 'BASIC' })
  @IsString()
  role: string;

  @ApiProperty({ default: 'OTHER' })
  @IsString()
  employeeType: string;

  @ApiProperty()
  @IsString()
  idNumber: string;

  @ApiProperty()
  @IsString()
  userCompanyId: string;

  @ApiProperty()
  @IsString()
  password: string;
}
