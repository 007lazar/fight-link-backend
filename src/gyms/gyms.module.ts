import { Module } from '@nestjs/common';
import { GymsController } from './gyms.controller';
import { GymsService } from './gyms.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GymsController],
  providers: [GymsService, PrismaService]
})
export class GymsModule {}
