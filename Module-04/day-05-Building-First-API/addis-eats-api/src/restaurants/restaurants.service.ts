import { Area } from './restaurants.type.js';
import { Inject, Injectable } from '@nestjs/common';
import type { RestaurantRepository } from './restaurants.repository.js';
import { Restaurant } from './restaurants.type.js';
import { createRestaurantDto } from './dto/create-restaurant.dto.js';
@Injectable()
export class RestaurantsService {
    constructor(
        @Inject('RESTAURANT_REPOSITORY')
        private readonly repository: RestaurantRepository,
    ) {}
    findAll(area?: Area): Restaurant[] {
        const rows = this.repository.all();
        if (area) {
            return rows.filter(r => r.area === area);
        }
        return rows
    }

    findById(id: number): Restaurant {
        const rest = this.repository.byId(id);
        if (!rest) {
        throw new Error('Restaurant not found');
        }
        return rest
    }

    create(dto: createRestaurantDto): Restaurant  {
        const id = Math.max(0, ...this.repository.all().map(r => r.id)) + 1;
        return this.repository.save(
            { ...dto,
                isOpen: dto.isOpen ?? true,
                id
            });
    }
}


