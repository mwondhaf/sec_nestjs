import { PassportStrategy } from '@nestjs/passport';
import { UniqueTokenStrategy } from 'passport-unique-token';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

export class UniqueOTPStrategy extends PassportStrategy(UniqueTokenStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(token: string) {}
}
