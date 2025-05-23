import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Deposito } from '@prisma/client';

@Injectable()
export class DepositoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DepositoCreateInput): Promise<Deposito> {
    return this.prisma.deposito.create({ data });
  }

  async findAll(): Promise<Deposito[]> {
    return this.prisma.deposito.findMany();
  }

  async findOne(id: number): Promise<Deposito | null> {
    return this.prisma.deposito.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.DepositoUpdateInput): Promise<Deposito> {
    return this.prisma.deposito.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Deposito> {
    return this.prisma.deposito.delete({ where: { id } });
  }
}