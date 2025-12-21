/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "./entities/order.entity";
import { OrderDetailsEntity } from "./entities/order-details.entity";
import { OrderStatusEntity } from "./entities/order-status.entity";
import { OrderService } from "./services/order.service";
import { OrderController } from "./controllers/order.controller";
import { CustomerEntity } from "src/users/entities/customer.entity";
import { FoodEntity } from "src/foods/entities/food.entity";

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity, OrderDetailsEntity, OrderStatusEntity, CustomerEntity, FoodEntity])],
    providers: [OrderService],
    controllers: [OrderController]
})
export class OrderModule { }