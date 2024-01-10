import { Injectable } from '@nestjs/common';
import { CreateIncidentCategoryDto } from './dto/create-incident-category.dto';
import { UpdateIncidentCategoryDto } from './dto/update-incident-category.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class IncidentCategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createIncidentCategoryDto: CreateIncidentCategoryDto) {
    return this.databaseService.incidentCategory.create({
      data: {
        name: createIncidentCategoryDto.name,
        incidentType: {
          connect: {
            id: createIncidentCategoryDto.incidentTypeId,
          },
        },
      },
    });
  }

  findAll() {
    return this.databaseService.incidentCategory.findMany({
      include: { incidentType: true },
      orderBy: { name: 'asc' },
    });
  }

  findOne(id: string) {
    return this.databaseService.incidentCategory.findUnique({ where: { id } });
  }

  update(id: string, updateIncidentCategoryDto: UpdateIncidentCategoryDto) {
    return this.databaseService.incidentCategory.update({
      where: { id },
      data: {
        name: updateIncidentCategoryDto.name,
        incidentType: {
          connect: {
            id: updateIncidentCategoryDto.incidentTypeId,
          },
        },
      },
    });
  }

  remove(id: string) {
    return this.databaseService.incidentCategory.delete({ where: { id } });
  }
}
