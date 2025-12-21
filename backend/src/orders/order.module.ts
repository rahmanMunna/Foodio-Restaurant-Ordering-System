/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "./entities/order.entity";
import { OrderDetailsEntity } from "./entities/order-details.entity";
import { OrderStatusEntity } from "./entities/order-status.entity";

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity, OrderDetailsEntity, OrderStatusEntity])],
    providers: [],
    controllers: []
})
export class OrderModule { }