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

export { Area, OrderStatus, Dish, Order };