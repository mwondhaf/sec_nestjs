import { Injectable } from '@nestjs/common';
import { CreatePeopleInvolvedDto } from './dto/create-people-involved.dto';
import { UpdatePeopleInvolvedDto } from './dto/update-people-involved.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PeopleInvolvedService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createPeopleInvolvedDto: CreatePeopleInvolvedDto) {
    return this.databaseService.peopleInvolved.create({
      data: createPeopleInvolvedDto,
    });
  }

  findAll() {
    return this.databaseService.peopleInvolved.findMany();
  }

  findOne(id: string) {
    return this.databaseService.peopleInvolved.findUnique({ where: { id } });
  }

  update(id: string, updatePeopleInvolvedDto: UpdatePeopleInvolvedDto) {
    return this.databaseService.peopleInvolved.update({
      data: updatePeopleInvolvedDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.databaseService.peopleInvolved.delete({ where: { id } });
  }
}
