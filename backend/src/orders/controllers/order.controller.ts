/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
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

    @Patch('preparing/:oId')
    async prepareOrder(@Param('oId', ParseIntPipe) oId: number): Promise<boolean> {
        return this.orderService.prepareOrder(oId);
    }
    @Patch('ready/:oId')
    async readyOrder(@Param('oId', ParseIntPipe) oId: number): Promise<boolean> {
        return this.orderService.readyOrder(oId);
    }
    @Patch('complete/:oId')
    async CompleteOrder(@Param('oId', ParseIntPipe) oId: number): Promise<boolean> {
        return this.orderService.completeOrder(oId);
    }
    @Get('customer/:cId')
    async getOrderByCustomerId(@Param('cId', ParseIntPipe) cId: number): Promise<OrderEntity[]> {
        return this.orderService.getOrderByCustomerId(cId)
    }
}