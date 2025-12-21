/* eslint-disable prettier/prettier */

export class OrderItemDTO {
    foodId: number;
    qty: number;
}

export class PlaceOrderDTO {
    customerId: number;
    orderItems: OrderItemDTO[];
}