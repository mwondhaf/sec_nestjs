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
import { IncidentCategoriesService } from './incident-categories.service';
import { CreateIncidentCategoryDto } from './dto/create-incident-category.dto';
import { UpdateIncidentCategoryDto } from './dto/update-incident-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Incident Categories')
@UseGuards(JwtAuthGuard)
@Controller('incident-categories')
export class IncidentCategoriesController {
  constructor(
    private readonly incidentCategoriesService: IncidentCategoriesService,
  ) {}

  @Post()
  create(@Body() createIncidentCategoryDto: CreateIncidentCategoryDto) {
    return this.incidentCategoriesService.create(createIncidentCategoryDto);
  }

  @Get()
  findAll() {
    return this.incidentCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncidentCategoryDto: UpdateIncidentCategoryDto,
  ) {
    return this.incidentCategoriesService.update(id, updateIncidentCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentCategoriesService.remove(id);
  }
}
