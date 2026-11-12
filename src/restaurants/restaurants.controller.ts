import type { Area, Restaurant } from './restaurants.type.js';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service.js';
import { createRestaurantDto } from './dto/create-restaurant.dto.js';
@Controller('restaurants')
export class RestaurantsController {
    constructor(readonly service: RestaurantsService) {}

    @Get()
    findAll(@Query('area') area?: Area) {
        return this.service.findAll(area);
    }

    @Get(":id")
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.service.findById(id);
    }
    @Post()
    create(@Body() dto: createRestaurantDto): Restaurant {
        return this.service.create(dto);
    }
}
