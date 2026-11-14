import { OrderRepository } from "./order.repository.js";
import { Order } from "./order.types.js";
import { OrderNotFoundError } from "./order.errors.js";
import { Area } from "./order.types.js";
class OrderService {
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
