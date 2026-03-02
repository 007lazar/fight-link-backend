import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

@Injectable()
export class PrismaService extends PrismaClient {
	constructor() {
		super({ adapter });
	}
}
