/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req, UnauthorizedException, UseGuards } from "@nestjs/common";
import { OrderService } from "../services/order.service";
import { PlaceOrderDTO } from "../dto/create-order.dto";
import { OrderEntity } from "../entities/order.entity";
import { OrderStatusEntity } from "../entities/order-status.entity";
import { CustomerGuard } from "src/auth/guards/customer.guard";
import { AdminGuard } from "src/auth/guards/admin.guard";

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @UseGuards(CustomerGuard)
    @Post('place')
    async placeOrder(@Req() req, @Body() dto: PlaceOrderDTO): Promise<OrderEntity> {
        const cookie = req.cookies['jwt'];
        const cId: number = await this.orderService.user(cookie);
        dto.customerId = cId
        console.log(dto)
        return this.orderService.placeOrder(dto);
    }

    @UseGuards(AdminGuard)
    @Patch('preparing/:oId')
    async prepareOrder(@Param('oId', ParseIntPipe) oId: number): Promise<boolean> {
        console.log(oId)
        return this.orderService.prepareOrder(oId);
    }

    @UseGuards(AdminGuard)
    @Patch('ready/:oId')
    async readyOrder(@Param('oId', ParseIntPipe) oId: number): Promise<boolean> {
        return this.orderService.readyOrder(oId);
    }

    // @UseGuards(AdminGuard)
    @Patch('complete/:oId')
    async CompleteOrder(@Param('oId', ParseIntPipe) oId: number): Promise<boolean> {
        return this.orderService.completeOrder(oId);
    }

    // @UseGuards(CustomerGuard)
    @Get('customer')
    async getOrderByCustomerId(@Req() req): Promise<OrderEntity[]> {
        try {
            // const cookie = req.cookies['jwt'];
            // console.log(cookie)
            const cId: number = 1;
            // const cId: number = await this.orderService.user(cookie);
            return this.orderService.getOrderByCustomerId(cId)
        }
        catch (ex) {
            throw new UnauthorizedException(ex)
        }
    }

    // @UseGuards(CustomerGuard)
    @Get('all')
    async getAllOrders(): Promise<OrderEntity[]> {
        return this.orderService.getAllOrders();
    }

    // @UseGuards(CustomerGuard)
    @Get('all-status')
    async getAllOrderStatus(): Promise<OrderStatusEntity[]> {
        return this.orderService.getAllOrderStatus();
    }


}