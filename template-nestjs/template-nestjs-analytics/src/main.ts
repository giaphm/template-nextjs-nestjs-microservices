import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'analytics',
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'analytics-consumer',
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
