import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { TotpStrategy } from 'passport-totp';

@Injectable()
export class TotStrategy extends PassportStrategy(TotpStrategy, 'totp') {
  constructor() {
    super({
      window: 1,
    });
  }

  async validate(
    token: string,
    done: (err: Error | null, user?: any, info?: any) => void,
  ): Promise<any> {
    console.log('token', token);
    return done(null, true);
  }
}
