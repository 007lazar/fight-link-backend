import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GymsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.gym.findMany({
      omit: {
        id: true
      }
    });
  }

  findOne(slug: string) {
    const gym = this.prisma.gym.findUnique({
      where: { slug: slug },
      select: {
        slug: true,
        name: true,
        description: true,
        poster: true,
        badges: true,
        createdAt: true
      },
    });

    return gym;
  }

  create(createGymDto: CreateGymDto) {
    return this.prisma.gym.create({
      data: createGymDto,
    });
  }
}
