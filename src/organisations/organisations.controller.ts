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
import { OrganisationsService } from './organisations.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';

@ApiTags('organisations')
@UseGuards(JwtAuthGuard)
@Controller('organisations')
export class OrganisationsController {
  constructor(private readonly organisationsService: OrganisationsService) {}

  @ApiBody({ type: CreateOrganisationDto })
  @Post()
  create(@Body() createOrganisationDto: CreateOrganisationDto) {
    return this.organisationsService.create(createOrganisationDto);
  }

  @Get()
  findAll() {
    return this.organisationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organisationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganisationDto: UpdateOrganisationDto,
  ) {
    return this.organisationsService.update(id, updateOrganisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organisationsService.remove(id);
  }
}
