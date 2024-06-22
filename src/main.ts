import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // This will remove any properties that are not defined in the DTO
      forbidNonWhitelisted: true, // This will throw an error if any properties are not defined in the DTO
      transform: true, // This will automatically transform the incoming request body to the DTO type
    }),
  );

  await app.listen(3000);
}
bootstrap();
