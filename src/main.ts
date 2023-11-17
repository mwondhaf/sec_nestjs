import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  // app.enableCors({ credentials: true, origin: 'http://localhost:300' });
  await app.listen(3003);
}
bootstrap();
