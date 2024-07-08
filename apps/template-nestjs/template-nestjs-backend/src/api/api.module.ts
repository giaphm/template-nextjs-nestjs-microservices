import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANALYTICS',
        transport: Transport.KAFKA,
        options: {
          client: { clientId: 'analytics', brokers: ['kafka:9092'] },
          consumer: { groupId: 'analytics-consumer' },
        },
      },
      {
        name: 'COMMUNICATION',
        transport: Transport.KAFKA,
        options: {
          client: { clientId: 'communication', brokers: ['kafka:9092'] },
          consumer: { groupId: 'communication-consumer' },
        },
      },
    ]),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
