import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { GymsService } from './gyms.service';

@Controller('gyms')
export class GymsController {

    constructor(private readonly gymsService: GymsService){}

    @Get()
    findAll() {
        return this.gymsService.findAll();
    }

    @Get(':slug')
    findOne(@Param('slug') slug : string){
        return this.gymsService.findOne(slug);
    }

    @Post()
    create(@Body() createGymDto: CreateGymDto){
        return this.gymsService.create(createGymDto);
    }

}
