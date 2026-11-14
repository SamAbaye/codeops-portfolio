import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { UpdateOrderDto } from './dto/update-order.dto.js';
import { HttpCode, Query } from '@nestjs/common';

@Controller('orders') 
export class OrdersController {
  constructor(
    private readonly orders: OrdersService, // 2 - injected
  ) {}

  @Get()
  findAll(@Query('area') area?: string) {
    return this.orders.findAll(area);
  }

  @Get(':id') // 4 - GET /api/orders/4821
  findOne(@Param('id') id: string) {
    return this.orders.find((id));
  }

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.orders.create(dto); 

  }
}
