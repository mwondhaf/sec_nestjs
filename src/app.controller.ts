import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';

// const nanoid = customAlphabet('1234567890abcdef', 10);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getHello(): any {
    throw new Error('Method not implemented.');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  async protected(@Req() req): Promise<any> {
    console.log('protected');
    // return await this.appService.protected(req);
  }
}
