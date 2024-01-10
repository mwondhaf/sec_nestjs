import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PeopleInvolvedService } from './people-involved.service';
import { CreatePeopleInvolvedDto } from './dto/create-people-involved.dto';
import { UpdatePeopleInvolvedDto } from './dto/update-people-involved.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('People Involved')
@UseGuards(JwtAuthGuard)
@Controller('people-involved')
export class PeopleInvolvedController {
  constructor(private readonly peopleInvolvedService: PeopleInvolvedService) {}

  @Post()
  create(@Body() createPeopleInvolvedDto: CreatePeopleInvolvedDto) {
    return this.peopleInvolvedService.create(createPeopleInvolvedDto);
  }

  @Get()
  findAll() {
    return this.peopleInvolvedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleInvolvedService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePeopleInvolvedDto: UpdatePeopleInvolvedDto,
  ) {
    return this.peopleInvolvedService.update(id, updatePeopleInvolvedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleInvolvedService.remove(id);
  }
}
