import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  generateToken(user: User) {
    const payload = { sub: user.id, email: user.email };
    return { access_token: this.jwtService.sign(payload, { expiresIn: '1d' }) };
  }

  validateUser(email: string) {
    const user = this.usersService.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  // validate user by id and password
  async validateUserByIdNumberAndPassword(
    idNumber: string,
    password: string,
  ): Promise<any> {
    const user = await this.usersService.getUserByIdNo(idNumber);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, idNumber, ...result } = user;
      return result;
    }
    return null;
  }

  // login
  async login(user: User) {
    const payload = {
      idNumber: user.idNumber,
      sub: {
        email: user.name,
      },
    };
    return {
      ...user,
      access_token: this.jwtService.sign(payload, { expiresIn: '1d' }),
    };
  }
}
