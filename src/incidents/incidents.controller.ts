import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('incidents')
@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Post()
  create(@Body() createIncidentDto: CreateIncidentDto) {
    return this.incidentsService.create(createIncidentDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.incidentsService.findAll(query);
  }

  @Get(':referenceNumber')
  findOne(@Param('referenceNumber') referenceNumber: string) {
    return this.incidentsService.findOne(referenceNumber);
  }

  @Patch(':referenceNumber')
  update(
    @Param('referenceNumber') referenceNumber: string,
    @Body() updateIncidentDto: UpdateIncidentDto,
  ) {
    return this.incidentsService.update(referenceNumber, updateIncidentDto);
  }

  @Delete(':referenceNumber')
  remove(@Param('referenceNumber') referenceNumber: string) {
    return this.incidentsService.remove(referenceNumber);
  }
}
