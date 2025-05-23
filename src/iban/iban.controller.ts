import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { IbanService } from './iban.service';
import { Prisma } from '@prisma/client';

@Controller('ibans')
export class IbanController {
  constructor(private readonly ibanService: IbanService) {}

  @Post()
  create(@Body() data: Prisma.IBANCreateInput) {
    return this.ibanService.create(data);
  }

  @Get()
  findAll() {
    return this.ibanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ibanService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Prisma.IBANUpdateInput) {
    return this.ibanService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ibanService.remove(id);
  }
}
