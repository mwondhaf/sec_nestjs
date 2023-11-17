import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // require a jwt
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(@Req() req): string {
    return `You're in ${req.user.name}`;
  }
}
