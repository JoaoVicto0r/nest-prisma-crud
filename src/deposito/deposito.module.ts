import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DepositoService } from './deposito.service';
import { DepositoController } from './deposito.controller';


@Module({
  providers: [DepositoService, PrismaService],
  controllers: [DepositoController],
})
export class DepositoModule {}