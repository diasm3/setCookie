import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetting } from "./util/swagger.util";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerSetting(app)
  await app.listen(3000);
}
bootstrap();
