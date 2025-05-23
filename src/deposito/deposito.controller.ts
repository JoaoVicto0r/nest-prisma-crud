import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { DepositoService } from './deposito.service';
import { Prisma } from '@prisma/client';

@Controller('depositos')
export class DepositoController {
  constructor(private readonly depositoService: DepositoService) {}

  @Post()
  create(@Body() data: Prisma.DepositoCreateInput) {
    return this.depositoService.create(data);
  }

  @Get()
  findAll() {
    return this.depositoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.depositoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Prisma.DepositoUpdateInput) {
    return this.depositoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.depositoService.remove(id);
  }
}