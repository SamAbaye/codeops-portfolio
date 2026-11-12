import { create } from 'domain';
import { Injectable } from "@nestjs/common";
import type { Restaurant } from "./restaurants.type.js";
import { SEED } from "./restaurants.seed.js";

export interface RestaurantRepository {
    all(): Restaurant[]
    byId(id: number): Restaurant | undefined
    save(r: Restaurant): Restaurant

}
@Injectable()
export class InMemoryRestaurantsRepository implements RestaurantRepository {
    
    private readonly rows = new Map<number, Restaurant>(
        SEED.map(r => [r.id, r])
    )

    all(){
        return [...this.rows.values()]
    }
    byId(id: number) {
        return this.rows.get(id)
    }

    save(r: Restaurant){
        this.rows.set(r.id, r)
        return r
    }
    create(r: Restaurant){
        this.rows.set(r.id, r)
        return r
    }
}