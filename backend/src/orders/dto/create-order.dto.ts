/* eslint-disable prettier/prettier */
import { IsInt, IsPositive } from 'class-validator';


export class OrderItemDTO {
  @IsInt({ message: 'foodId must be an integer' })
  @IsPositive({ message: 'foodId must be a positive number' })
  foodId: number;

  @IsInt({ message: 'qty must be an integer' })
  @IsPositive({ message: 'qty must be greater than 0' })
  qty: number;
}

export class PlaceOrderDTO {
  @IsInt({ message: 'customerId must be an integer' })
  @IsPositive({ message: 'customerId must be a positive number' })
  customerId: number;
  orderItems: OrderItemDTO[];
}