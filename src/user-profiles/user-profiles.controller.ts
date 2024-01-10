import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('user-profiles')
@UseGuards(JwtAuthGuard)
@Controller('user-profiles')
export class UserProfilesController {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  @ApiBody({ type: CreateUserProfileDto })
  @Post()
  create(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.userProfilesService.create(createUserProfileDto);
  }

  @Get()
  findAll() {
    return this.userProfilesService.findAll();
  }
  @Get('own')
  findOwnProfiles(@Req() req) {
    return this.userProfilesService.findOwnProfiles(req.user.email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfilesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.userProfilesService.update(id, updateUserProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfilesService.remove(id);
  }
}
