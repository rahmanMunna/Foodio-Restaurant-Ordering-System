export type OrderItems = {
    foodId: number,
    qty: number;
}

export type PlaceOrder = {
    customerId: number;
    orderItems: OrderItems[];
}