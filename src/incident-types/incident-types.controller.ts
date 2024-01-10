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
import { IncidentTypesService } from './incident-types.service';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Incident Types')
@UseGuards(JwtAuthGuard)
@Controller('incident-types')
export class IncidentTypesController {
  constructor(private readonly incidentTypesService: IncidentTypesService) {}

  @Post()
  create(@Body() createIncidentTypeDto: CreateIncidentTypeDto) {
    return this.incidentTypesService.create(createIncidentTypeDto);
  }

  @Get()
  findAll() {
    return this.incidentTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentTypesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncidentTypeDto: UpdateIncidentTypeDto,
  ) {
    return this.incidentTypesService.update(id, updateIncidentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentTypesService.remove(id);
  }
}
