/* eslint-disable prettier/prettier */

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { FoodEntity } from "src/foods/entities/food.entity";

@Entity('order_details')
export class OrderDetailsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    qty: number;

    @Column({ type: 'float' })
    orderPrice: number;

    @ManyToOne(() => OrderEntity, order => order.orderDetails)
    @JoinColumn({ name: 'order_id' })
    order: OrderEntity;

    @ManyToOne(() => FoodEntity, food => food.orderDetails)
    @JoinColumn({ name: 'food_id' })
    food: FoodEntity;
}