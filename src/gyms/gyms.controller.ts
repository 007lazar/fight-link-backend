import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';

@Controller('gyms')
export class GymsController {

    @Get()
    findAll() {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id : string){
        return {id};
    }

    @Post()
    create(@Body() createGymDto: CreateGymDto){
        return {
            id : createGymDto.id,
            name: createGymDto.name,
            category: createGymDto.category
        }
    }

}
