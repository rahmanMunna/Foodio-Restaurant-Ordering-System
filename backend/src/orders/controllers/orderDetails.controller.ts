/* eslint-disable prettier/prettier */

import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { OrderDetailsService } from "../services/orderDetails.service";
import { OrderDetailsEntity } from "../entities/order-details.entity";

@Controller('order-details')
export class OrderDetailsController {
    constructor(private readonly orderDetailsService: OrderDetailsService) { }

    @Get('order/:oId')
    getOrderDetailsByOrderId(@Param('oId', ParseIntPipe) oId: number): Promise<OrderDetailsEntity[]> {
        return this.orderDetailsService.getOrderDetailsByOrderId(oId);
    }
}