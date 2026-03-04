import { Injectable, Param } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }


  create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({
      data: createEventDto
    });
  }

  findAll() {
    return this.prisma.event.findMany({
      omit: {
        id: true
      }
    });
  }

  findOne(slug: string) {
    const event = this.prisma.event.findUnique({
      where: {slug: slug},
      select: {
        slug: true,
        title: true, 
        discipline: true,
        city: true,
        date: true,
        poster: true,
        createdAt: true
      }
    })

    return event;
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: string) {
    return `This action removes a #${id} event`;
  }
}
