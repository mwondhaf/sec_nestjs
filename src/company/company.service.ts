import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CompanyService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createCompanyDto: CreateCompanyDto) {
    return this.databaseService.company.create({ data: createCompanyDto });
  }

  findAll() {
    return this.databaseService.company.findMany();
  }

  findOne(id: string) {
    return this.databaseService.company.findUnique({ where: { id } });
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.databaseService.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  remove(id: string) {
    return this.databaseService.company.delete({ where: { id } });
  }
}
