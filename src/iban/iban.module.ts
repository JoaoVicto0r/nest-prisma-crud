import { Module } from '@nestjs/common';
import { IbanService } from './iban.service';
import { IbanController } from './iban.controller';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  providers: [IbanService, PrismaService],
  controllers: [IbanController],
})
export class IbanModule {}