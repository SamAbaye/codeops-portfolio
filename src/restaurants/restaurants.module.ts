import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller.js';
import { RestaurantsService } from './restaurants.service.js';
import { RESTAURANT_REPOSITORY } from './restaurants.constants.js';
import { InMemoryRestaurantsRepository } from './restaurants.repository.js';
@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService,
    {
      provide: RESTAURANT_REPOSITORY,
      useClass: InMemoryRestaurantsRepository
    }
  ]
})
export class RestaurantsModule {}
