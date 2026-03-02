import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { GymsModule } from './gyms/gyms.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EventsModule, GymsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}