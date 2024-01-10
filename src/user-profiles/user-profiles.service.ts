import { Injectable } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserProfilesService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUserProfileDto: CreateUserProfileDto) {
    return this.databaseService.userProfile.create({
      data: createUserProfileDto,
    });
  }

  findAll() {
    return this.databaseService.userProfile.findMany({
      orderBy: { createdAt: 'asc' },
      include: { entity: true },
    });
  }

  findOwnProfiles(email: string) {
    return this.databaseService.userProfile.findMany({
      orderBy: { createdAt: 'asc' },
      where: { userEmail: email },
      include: { user: true, entity: true },
    });
  }

  findOne(id: string) {
    return this.databaseService.userProfile.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserProfileDto: UpdateUserProfileDto) {
    return this.databaseService.userProfile.update({
      where: { id },
      data: updateUserProfileDto,
    });
  }

  remove(id: string) {
    return this.databaseService.userProfile.delete({ where: { id } });
  }
}
