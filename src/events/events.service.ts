import { Injectable, Param } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

const events = [
  {
    id: "ufc-310",
    title: "UFC 310: Jones vs Pereira",
    discipline: "MMA",
    city: "Las Vegas",
    date: "2026-03-15T19:00:00",
    poster: "https://www.bravecf.com/images/Events/image%20(9)%20(1).jpg",
  },

  {
    id: "brave-92",
    title: "BRAVE CF 92",
    discipline: "MMA",
    city: "Belgrade",
    date: "2026-04-10T20:00:00",
    poster: "https://www.bravecf.com/images/Events/image%20(9)%20(1).jpg",
  },

  {
    id: "glory-98",
    title: "GLORY 98",
    discipline: "Kickboxing",
    city: "Novi Sad",
    date: "2026-05-05T18:30:00",
    poster: "https://www.bravecf.com/images/Events/image%20(9)%20(1).jpg",
  }
]

@Injectable()
export class EventsService {

  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  findAll() {
    return events;

  }

  findOne(id: string) {
    const event = events.find((e) => e.id === id)

    if (event) {
      return event;
    } else {
      return undefined;
    }
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: string) {
    return `This action removes a #${id} event`;
  }
}
