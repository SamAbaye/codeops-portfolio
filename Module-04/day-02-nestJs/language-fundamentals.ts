// function add(a: number, b: number): number {
// return a + b;
// }
// function deliveryFee(area: string, totalSantim: number): number {
// if (totalSantim >= 50000) return 0;
// return area === "Bole" ? 4000 : 6000;
// }
// console.log(deliveryFee("Bole", 30000));
// console.log(deliveryFee("Piassa", 30000));
// console.log(deliveryFee("Bole", 60000));
// function logOrder(id: number): void {
// console.log(`Order ${id}`);
// }
// function fail(message: string): never {
// throw new Error(message);
// }

//Optional, Default and Rest Parameters

// function receipt(id: number, note?: string): string {
// return `Order ${id}: ${note ?? "no note"}`;
// }
// function fee(area: string, base: number = 6000): number {
// return area === "Bole" ? 4000 : base;
// }
// function total(...amounts: number[]): number {
// return amounts.reduce((sum, amount) => sum + amount, 0);
// }
// function createOrder(data: {
// customer: string;
// area: string;
// dishes: string[];
// }) {
// // Create order
// }

// type FeeRule = (area: string, total: number) => number;
// const flatRate: FeeRule = () => 5000;
// const byArea: FeeRule = (area) =>
// area === "Bole" ? 4000 : 6000;
// const menu = [

// { name: "Pizza", price: 25000 },
// { name: "Burger", price: 18000 }
// ];
// const names = menu.map((dish) => dish.name);

//Arrow Functions, this, and When Each Form Wins

// class OrderService {
// private area = "Bole";
// fee = () =>
// this.area === "Bole" ? 4000 : 6000;
// feeLoose() {
// return this.area;
// }
// }
// const service = new OrderService();
// const feeFunction = service.feeLoose;

// Module part 2 Interfaces & Type Aliases

// interface Restaurant {
// id: number;
// name: string;
// area: string;
// phone?: string;
// }
// interface DeliveryRestaurant extends Restaurant {
// deliversTo: string[];
// minimumOrderSantim: number;

// }
// class YodAbyssinia implements DeliveryRestaurant {
// readonly id = 1;
// name = "Yod Abyssinia";
// area = "Bole";
// deliversTo = ["Bole", "Kazanchis"];
// minimumOrderSantim = 15000;
// }

// interface Order {
// id: number;
// totalSantim: number;
// }
// type OrderStatus = "PENDING" | "DELIVERED" | "CANCELLED";
// type LatLng = [number, number];
// interface User { name: string; }
// interface User { age: number; }

//Classes: The Shape Nest Is Built From
// class OrderService {
//     constructor(
//     private readonly repo: OrderRepository,
//     private readonly fee: FeeRule,
//     ) {}
//     find(id: number): Order | undefined {
//         return this.repo.byId(id);
//     }
//     quote(order: Order): number {
//         return this.fee(order.area, order.totalSantim);
//     }
// }

//Collections: Map, Set and Record

// interface Order {
// id: number;

// customer: string;
// }
// const byId = new Map<number, Order>();
// byId.set(4821, { id: 4821, customer: "Abel" });
// console.log(byId.get(4821));
// console.log(byId.has(4821));
// console.log(byId.size);
// const areas = new Set<string>();
// areas.add("Bole");
// areas.add("Bole");
// areas.add("Piassa");
// console.log(areas.size); // 2
// type Area = "Bole" | "Kazanchis" | "Piassa" | "Megenagna";
// const feeByArea: Record<Area, number> = {
//     Bole: 4000,
//     Kazanchis: 6000,
//     Piassa: 6000,
//     Megenagna: 6000
// }

// function first<T>(items: T[]): T | undefined {
// return items[0];
// }
// const firstDishItem = first(menu);
// const firstOrderItem = first(orders);

// interface Named {
// name: string;
// }

//Part three Gneric One Function, Many Types

// function firstOrder(items: Order[]): Order | undefined {
//   return items[0];
// }

// function firstDish(items: Dish[]): Dish | undefined {
//   return items[0];
// }

// function label<T extends Named>(item: T): string {
// return item.name;
// }
// function pluck<T, K extends keyof T>(
// items: T[],
// key: K
// ): T[K][] {
// return items.map((item) => item[key]);
// }
// const names = pluck(menu, "name"); // string[]
// const prices = pluck(menu, "price"); // number[]

// part 4: APi response
// interface ApiResponse<T> {
// data: T;
// requestId: string;
// }
// type OrderResponse = ApiResponse<Order>;
// type MenuResponse = ApiResponse<Dish[]>;
// interface Page<T> {
// items: T[];
// total: number;
// page: number;
// }
// function emptyPage<T>(): Page<T> {
// return { items: [], total: 0, page: 1 };
// }
// const page = emptyPage<Dish>();

//Error message
// try {
// const order = parseOrder(raw);
// } catch (err) {
// if (err instanceof Error) {
// console.error(err.message);
// } else {
// console.error(String(err));
// }
// }
// const error = new Error("Order 4821 not found");
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);

//DOMAIN ERROR TYPE
// class OrderNotFoundError extends Error {
// constructor(public readonly orderId: number) {
// super(`Order ${orderId} not found`);
// this.name = "OrderNotFoundError";
// }
// }
// class PaymentDeclinedError extends Error {
// constructor(
// public readonly phone: string,
// public readonly reason: string
// ) {
// super(`Payment declined for ${phone}: ${reason}`);
// this.name = "PaymentDeclinedError";
// }
// }
