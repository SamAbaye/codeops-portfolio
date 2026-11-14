const firstName : string = "John Doe";

function getName(firstNAmes: string): string{
    return `my name is ${firstNAmes}`
}   


const result = getName(firstName);
console.log(result);

type Restaurant = {
    readonly id: number;
    name: string;
    area: string;
    phone?: string;
}


const yoda: Restaurant = {
    id: 1,
    name: "Yod Abyssinia",
    area: "Bole",
    phone: "0912345678"
}


function deliveryFee(area: string, totalSantim: number): number {
    if (totalSantim >= 50000) return 0;
    return area === "Bole" ? 4000 : 6000;
}

console.log(deliveryFee(yoda.area, 30000));


type Id = number | string;
type Order = {
    id: Id;
    customer: string;
    total: number;
    status: "pending" | "processing" | "shipped";
}

const order: Order = {
    id: '1',
    customer: "John Doe",
    total: 10000,
    status: "pending"
}

function logOrder(id: Id): void {
    console.log(`Order ${id}`);
}

logOrder(order.id);