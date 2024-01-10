import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { MagicLoginStrategy } from './strategies/magiclogin.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MailingService } from 'src/helpers/email-service';
import { LocalStrategy } from './strategies/local.strategy';
import { UniqueOTPStrategy } from './strategies/unique-token.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    MailingService,
    MagicLoginStrategy,
    JwtStrategy,
    LocalStrategy,
    UniqueOTPStrategy,
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
