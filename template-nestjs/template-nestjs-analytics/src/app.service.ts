import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(createUserEvent: CreateUserEvent) {
    console.log('handleUserCreated - ANALYTICS', createUserEvent);
    this.analytics.push({
      email: createUserEvent.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
