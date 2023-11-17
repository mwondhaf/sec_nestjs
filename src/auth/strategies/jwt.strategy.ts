import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
// import { User } from '@prisma/client';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.cookieExtractor,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: 'secret', //TODO add to .env
      ignoreExpiration: false,
    });
  }

  private static cookieExtractor(req: Request): string | null {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['user_token'];
    }
    return token;
  }

  async validate(payload: any): Promise<any> {
    console.log({ payload });

    const result = await this.userService.getUserByEmail(payload.email);
    if (!result) {
      throw new UnauthorizedException();
    }

    return result;
  }
}
