import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'communication',
          brokers: ['kafka:9092'],
        },
        // consumer: {
        //   groupId: 'communication-consumer',
        // },
      },
    },
  );
  app.listen();
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3002, '0.0.0.0');
}
bootstrap();
