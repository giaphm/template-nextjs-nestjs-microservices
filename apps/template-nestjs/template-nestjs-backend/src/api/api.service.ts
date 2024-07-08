import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class ApiService implements OnModuleInit {
  protected readonly logger = new Logger(ApiService.name);
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientKafka,
  ) {}

  async onModuleInit() {
    const requestPatterns = ['get_analytics'];

    requestPatterns.forEach((pattern: string) =>
      this.analyticsClient.subscribeToResponseOf(pattern),
    );

    await this.analyticsClient.connect();
  }

  getHello(): string {
    this.logger.log('getHello() success!');
    return 'Hello world!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    console.log('Complete creatUser', createUserRequest);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
    this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }

  getAnalytics() {
    return this.analyticsClient.send('get_analytics', {});
  }
}
