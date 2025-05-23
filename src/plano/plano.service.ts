import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Plano } from '@prisma/client';

@Injectable()
export class PlanoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PlanoCreateInput): Promise<Plano> {
    return this.prisma.plano.create({ data });
  }

  async findAll(): Promise<Plano[]> {
    return this.prisma.plano.findMany();
  }

  async findOne(id: number): Promise<Plano | null> {
    return this.prisma.plano.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.PlanoUpdateInput): Promise<Plano> {
    return this.prisma.plano.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Plano> {
    return this.prisma.plano.delete({ where: { id } });
  }
}
