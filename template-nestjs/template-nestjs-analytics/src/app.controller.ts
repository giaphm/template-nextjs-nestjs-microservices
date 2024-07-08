import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  protected readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(createUserEvent: CreateUserEvent) {
    console.log('createUserEvent', createUserEvent);
    console.log('createUserEvent.email', createUserEvent.email);
    this.logger.log('createUserEvent', createUserEvent);

    this.appService.handleUserCreated(createUserEvent);
  }

  @MessagePattern('get_analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
