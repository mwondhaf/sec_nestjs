import { Injectable } from '@nestjs/common';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class IncidentTypesService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createIncidentTypeDto: CreateIncidentTypeDto) {
    return this.databaseService.incidentType.create({
      data: createIncidentTypeDto,
    });
  }

  findAll() {
    return this.databaseService.incidentType.findMany();
  }

  findOne(id: string) {
    return this.databaseService.incidentType.findUnique({
      where: { id },
    });
  }

  update(id: string, updateIncidentTypeDto: UpdateIncidentTypeDto) {
    return this.databaseService.incidentType.update({
      where: { id },
      data: updateIncidentTypeDto,
    });
  }

  remove(id: string) {
    return this.databaseService.incidentType.delete({
      where: { id },
    });
  }
}
