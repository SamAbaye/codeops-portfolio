import orders from './sample-orders.json' with { type: 'json' };

type Area = 'Bole' | 'Kazanchis' | 'Piassa' | 'Megenagna';
type OrderStatus =
    'PENDING' | 'PREPARING' | 'ON_THE_WAY' | 'DELIVERED' | 'CANCELLED';
type Dish = {
    name: string;
    priceSantim: number;
};
type Order = {
    readonly id: string;
    customerName: string;
    area: Area;
    status: OrderStatus;
    dishList: Dish[];
    teleBirrPhone: string;
    totalSantim: number;
};

function deliveryFee(order: Order): number {
    if (order.totalSantim >= 500) return 0;
    return order.area === 'Bole' ? 40 : 60;
}

function statusMessage(status: OrderStatus): string {
    switch (status) {
        case 'PENDING':
            return 'Your order is pending';
        case 'PREPARING':
            return 'Your order is being prepared';
        case 'ON_THE_WAY':
            return 'Your order is on the way';
        case 'DELIVERED':
            return 'Your order has been delivered';
        case 'CANCELLED':
            return 'Your order has been cancelled';
        default:
            return 'never';
    }
}
function formatEtb(santim: number): string {
    return new Intl.NumberFormat('en-ET', {
        style: 'currency',
        currency: 'ETB',
    }).format(santim / 100);
}

const receipt = `
    Addis Eats - Order #4821
    Customer: ${orders['Order-1'].customerName}
    Area:     Bole
    Total:    ${formatEtb(orders['Order-1'].totalSantim)}
`;
