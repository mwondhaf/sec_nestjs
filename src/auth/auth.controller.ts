import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './strategies/magiclogin.strategy';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private strategy: MagicLoginStrategy,
  ) {}

  // send magic link
  @Post('login')
  login(@Req() req, @Res() res, @Body() body) {
    this.authService.validateUser(body.destination);
    return this.strategy.send(req, res);
  }

  // callback
  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback')
  callback(@Req() req) {
    console.log(req.user);
    let token = this.authService.generateToken(req.user);

    console.log(token.access_token);

    return token;
  }
}
