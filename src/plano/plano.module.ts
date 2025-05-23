import { Module } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { PlanoController } from './plano.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PlanoService, PrismaService],
  controllers: [PlanoController],
})
export class PlanoModule {}
