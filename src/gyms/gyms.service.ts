import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GymsService {

    constructor(private prisma: PrismaService){}

    findAll(){
        return this.prisma.gym.findMany();
    }

    findOne(slug: string){
        const gym = this.prisma.gym.findUnique({where: {slug: slug}})

        if(gym){
            return gym;
        }else{
            return undefined;
        }
    }

    create(createGymDto: CreateGymDto) {
        return this.prisma.gym.create({
            data: createGymDto
        });
    }
}
