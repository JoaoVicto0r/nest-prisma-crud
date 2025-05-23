import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, IBAN } from '@prisma/client';

@Injectable()
export class IbanService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.IBANCreateInput): Promise<IBAN> {
    return this.prisma.iBAN.create({ data });
  }

  async findAll(): Promise<IBAN[]> {
    return this.prisma.iBAN.findMany();
  }

  async findOne(id: number): Promise<IBAN | null> {
    return this.prisma.iBAN.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.IBANUpdateInput): Promise<IBAN> {
    return this.prisma.iBAN.update({ where: { id }, data });
  }

  async remove(id: number): Promise<IBAN> {
    return this.prisma.iBAN.delete({ where: { id } });
  }
}
