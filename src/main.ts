import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  app.enableCors({
    origin: '*', // ou especifique: ['http://127.0.0.1:5500']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
   app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
   
}
bootstrap();
