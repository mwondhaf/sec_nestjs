import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Dispatch Report')
    .setDescription('Dispatch API description')
    .setVersion('1.0')
    .addTag('Dispatch')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser());
  // app.enableCors({ credentials: true, origin: 'http://localhost:300' });
  await app.listen(3003);
}
bootstrap();
