/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { OrderService } from "../services/order.service";
import { PlaceOrderDTO } from "../dto/create-order.dto";
import { OrderEntity } from "../entities/order.entity";

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post('place')
    async placeOrder(@Body() dto: PlaceOrderDTO): Promise<OrderEntity> {
        return this.orderService.placeOrder(dto);
    }
}