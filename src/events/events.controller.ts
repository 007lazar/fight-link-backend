import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    const data = this.eventsService.findOne(slug); 
    if(data)
      return data
    else
      throw new NotFoundException("Event not found");
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(slug, updateEventDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.eventsService.remove(slug);
  }
}
