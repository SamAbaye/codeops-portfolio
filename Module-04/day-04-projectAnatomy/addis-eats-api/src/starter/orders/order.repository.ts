import { Order } from "./order.types.js";

interface OrderRepository {
    all(): Order[];
    byId(id: string): Order | undefined;
    save(order: Order): void;
    
}

class InMemoryOrderRepository implements OrderRepository {
    
    private readonly orders: Record<string, Order> = {
        
    };

    all(): Order[] {
        return Object.values(this.orders);
    }

    byId(id: string): Order | undefined {
        return this.orders[id];
    }

    save(order: Order): void {
        this.orders[order.id] = order;
    }
}

interface Named {
    name: string;
}

function  label<T extends Named>(item: T) { return item.name; }

export type { OrderRepository, InMemoryOrderRepository };
