import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './strategies/magiclogin.strategy';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt.guard';
import { User } from '@prisma/client';
// import { PasswordLessLoginDto } from './dto/passwordless-login.dto';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    // private strategy: MagicLoginStrategy,
  ) {}

  // login with id number and password
  @UseGuards(LocalAuthGuard)
  @Post('id-login')
  async loginLocal(@Req() req: { user: User }) {
    let token = this.authService.generateToken(req.user);
    // console.log(token);

    const { createdAt, updatedAt, isActive, role, idNumber, ...rest } =
      req.user;
    return { ...rest, accessToken: token.access_token };
  }

  // send magic link
  // @Post('login')
  // login(
  //   @Req() req,
  //   @Res() res,
  //   @Body(new ValidationPipe()) body: PasswordLessLoginDto,
  // ) {
  //   this.authService.validateUser(body.destination);
  //   return this.strategy.send(req, res);
  // }

  // callback
  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback')
  callback(@Req() req: { user: User }) {
    let token = this.authService.generateToken(req.user);
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get('account')
  findLoggedInAccount(@Req() req: { user: User }) {
    let token = this.authService.generateToken(req.user);
    const { createdAt, updatedAt, isActive, role, idNumber, ...rest } =
      req.user;
    return rest;
  }
}
