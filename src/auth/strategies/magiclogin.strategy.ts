import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { AuthService } from '../auth.service';
import { MailingService } from 'src/helpers/email-service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    emailService: MailingService,
  ) {
    super({
      secret: 'secret', //TODO put in .env
      jwtOptions: {
        expiresIn: '5m',
      },
      callbackUrl: 'http://localhost:3000/login/email', //TODO this should be url of backend server
      sendMagicLink: async (destination, href) => {
        await emailService.sendMagicLink(destination, href);
      },
      verify: (payload, callback) => {
        callback(null, this.validate(payload));
      },
    });
  }
  validate(payload: { destination: string }) {
    const user = this.authService.validateUser(payload.destination);
    return user;
  }
}
