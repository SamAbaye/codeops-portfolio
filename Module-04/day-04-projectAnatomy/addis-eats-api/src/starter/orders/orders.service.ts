import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { UpdateOrderDto } from './dto/update-order.dto.js';
import type { OrderRepository } from './order.repository.js';
import { Order, Area } from './order.types.js';
import { OrderNotFoundError } from './order.errors.js';


@Injectable()
export class OrdersService {
  findAll(area: string | undefined) {
    throw new Error('Method not implemented.');
  }
  create(dto: CreateOrderDto) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, dto: UpdateOrderDto) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly orderRepository: OrderRepository) {}
  find(id: string): Order | undefined {
      throw new Error(OrderNotFoundError(id).message);
  }
  feesByArea(): Record<Area, number> {
      return {
      Bole: 4000,
      Kazanchis: 6000,
      Piassa: 6000,
      Megenagna: 6000,
      };
  }
  summarise<K extends keyof Order>(key: K): Order[K][]{
      return this.orderRepository.all().map((order) => order[key]);
  }

}

