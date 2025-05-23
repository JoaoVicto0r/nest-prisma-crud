import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { Prisma } from '@prisma/client';

@Controller('transacoes')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @Post()
  create(@Body() data: Prisma.TransacaoCreateInput) {
    return this.transacaoService.create(data);
  }

  @Get()
  findAll() {
    return this.transacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transacaoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Prisma.TransacaoUpdateInput) {
    return this.transacaoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transacaoService.remove(id);
  }
}
