import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DepartmentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.databaseService.department.create({
      data: createDepartmentDto,
    });
  }

  findAll() {
    return this.databaseService.department.findMany();
  }

  findOne(id: string) {
    return this.databaseService.department.findUnique({
      where: { id },
    });
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.databaseService.department.update({
      where: { id },
      data: updateDepartmentDto,
    });
  }

  remove(id: string) {
    return this.databaseService.department.delete({
      where: { id },
    });
  }
}
