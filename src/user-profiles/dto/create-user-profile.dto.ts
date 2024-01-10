import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserProfileDto {
  @ApiProperty()
  @IsString()
  userEmail: string;

  @ApiProperty()
  @IsString()
  entityId: string;
}
