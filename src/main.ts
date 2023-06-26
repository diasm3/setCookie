import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetting } from './util/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposedHeaders: ['Set-Cookie'],
    credentials: true,
  });
  swaggerSetting(app);
  await app.listen(3000);
}
bootstrap();
