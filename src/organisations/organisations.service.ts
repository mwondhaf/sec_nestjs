import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';

@Injectable()
export class OrganisationsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createOrganisationDto: CreateOrganisationDto) {
    return this.databaseService.entity.create({
      data: createOrganisationDto,
    });
  }

  findAll() {
    return this.databaseService.entity.findMany({
      orderBy: { updatedAt: 'desc' },
      include: { UserProfile: true },
    });
  }

  findOne(id: string) {
    return this.databaseService.entity.findUnique({ where: { id } });
  }

  update(id: string, updateOrganisationDto: UpdateOrganisationDto) {
    return this.databaseService.entity.update({
      where: { id },
      data: updateOrganisationDto,
    });
  }

  remove(id: string) {
    return this.databaseService.entity.delete({ where: { id } });
  }
}
