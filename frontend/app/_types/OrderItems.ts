export type OrderItems = {
    foodId: number,
    qty: number;
}

export type PlaceOrder = {
    orderItems: OrderItems[];
}