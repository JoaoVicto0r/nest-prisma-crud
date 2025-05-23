import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { Prisma } from '@prisma/client';

@Controller('planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Post()
  create(@Body() data: Prisma.PlanoCreateInput) {
  return this.planoService.create(data);
    }
}
