/* eslint-disable prettier/prettier */

export class OrderItemDTO {
    foodId: number;
    price: number;
    qty: number;
}

export class PlaceOrderDTO {
    customerId: number;
    orderItems: OrderItemDTO[];
}