import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async findAll(query?: any) {
    return this.databaseService.user.findMany({
      orderBy: { createdAt: 'desc' },
      include: { UserProfile: { include: { entity: true } }, company: true },
    });
  }

  // async findOne(id: string) {
  //   return this.databaseService.user.findUnique({ where: { id } });
  // }

  async getUserByEmail(email: string) {
    return this.databaseService.user.findUnique({
      where: { email },
      include: { UserProfile: { include: { entity: true } } },
    });
  }

  async getUserByIdNo(idNumber: string) {
    return this.databaseService.user.findFirst({
      where: { idNumber },
      include: { UserProfile: { include: { entity: true } } },
    });
  }

  async update(email: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { email },
      data: updateUserDto,
    });
  }

  async remove(email: string) {
    return this.databaseService.user.deleteMany({ where: { email } });
  }
}
