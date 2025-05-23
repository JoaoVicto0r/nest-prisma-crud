import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Transacao } from '@prisma/client';

@Injectable()
export class TransacaoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TransacaoCreateInput): Promise<Transacao> {
    return this.prisma.transacao.create({ data });
  }

  async findAll(): Promise<Transacao[]> {
    return this.prisma.transacao.findMany();
  }

  async findOne(id: number): Promise<Transacao | null> {
    return this.prisma.transacao.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.TransacaoUpdateInput): Promise<Transacao> {
    return this.prisma.transacao.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Transacao> {
    return this.prisma.transacao.delete({ where: { id } });
  }
}
