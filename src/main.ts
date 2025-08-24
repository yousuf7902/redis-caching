import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseTimeMiddleware } from './middleware/responseTime.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new ResponseTimeMiddleware().use); 

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
