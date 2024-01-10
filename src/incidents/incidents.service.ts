import { Injectable } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class IncidentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createIncidentDto: CreateIncidentDto) {
    return this.databaseService.incident.create({
      data: createIncidentDto,
    });
  }

  findAll(query?: any) {
    const {
      search,
      severity,
      cat_id,
      cat_type_id,
      start_date,
      end_date,
      compiler_email,
      involved_nationality,
      involved_name,
      involved_id,
      involved_dept,
      reporter_dept,
      reporter_name,
    } = query;

    return this.databaseService.incident.findMany({
      where: {
        AND: [
          search && {
            OR: [
              {
                investigation: {
                  contains: search,
                  mode: 'insensitive',
                },
              },
              {
                description: {
                  contains: search,
                  mode: 'insensitive',
                },
              },
              {
                referenceNumber: {
                  contains: search,
                  mode: 'insensitive',
                },
              },
            ],
          },
          severity && {
            severity: {
              equals: severity,
            },
          },
          cat_id && { incidentCategoryId: { equals: cat_id } },
          cat_type_id && {
            category: { incidentTypeId: { equals: cat_type_id } },
          },
          start_date && { incidentTime: { gte: new Date(start_date) } },
          end_date && { incidentTime: { lte: new Date(end_date) } },
          compiler_email && { compilerEmail: { equals: compiler_email } },
          involved_nationality && {
            PeopleInvolved: { some: { nationality: involved_nationality } },
          },
          involved_name && {
            PeopleInvolved: {
              some: { name: { contains: involved_name, mode: 'insensitive' } },
            },
          },
          involved_id && {
            PeopleInvolved: {
              some: { identity_number: { equals: involved_id } },
            },
          },
          reporter_dept && {
            departmentId: { equals: reporter_dept },
          },
          involved_dept && {
            PeopleInvolved: {
              some: { departmentId: involved_dept },
            },
          },
          reporter_name && {
            reporterName: { contains: reporter_name, mode: 'insensitive' },
          },
        ].filter(Boolean), // Filter out falsy values
      },
      orderBy: { incidentTime: 'desc' },
      include: {
        category: { include: { incidentType: true } },
        reporterDepartment: true,
        PeopleInvolved: true,
        compiler: { include: { UserProfile: true } },
        entity: true,
        editor: { include: { UserProfile: true } },
      },
    });
  }

  findOne(referenceNumber: string) {
    return this.databaseService.incident.findUnique({
      where: { referenceNumber },
      include: {
        PeopleInvolved: true,
        category: { include: { incidentType: true } },
        reporterDepartment: true,
        compiler: { include: { UserProfile: { include: { entity: true } } } },
      },
    });
  }

  update(referenceNumber: string, updateIncidentDto: UpdateIncidentDto) {
    return this.databaseService.incident.update({
      where: { referenceNumber },
      data: updateIncidentDto,
    });
  }

  remove(referenceNumber: string) {
    return `This action removes a #${referenceNumber} incident`;
  }
}
